import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { useMongoDB } from '../config/db';
import { PropertyModel } from '../models/Property';
import { MediaModel } from '../models/Media';
import { readProperties, writeProperties } from '../properties';
import { PropertyItem } from '../../src/shared/schema';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-prod';

// Auth middleware
function authMiddleware(req: Request, res: Response, next: Function) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// GET /api/properties — public, with optional category filter, newest first
router.get('/', async (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;

  if (useMongoDB) {
    try {
      const query = category ? { category } : {};
      const properties = await PropertyModel.find(query).sort({ createdAt: -1 }).lean();
      return res.json(properties);
    } catch (err: any) {
      console.error('MongoDB query error, using local fallback:', err);
    }
  }

  // Local JSON fallback
  const properties = readProperties();
  if (category) {
    return res.json(properties.filter(p => p.category === category));
  }
  res.json(properties);
});

// GET /api/properties/:id/media — retrieve all photos and video tour files matching property ID
router.get('/:id/media', async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  if (useMongoDB) {
    try {
      const media = await MediaModel.find({ propertyId }).lean();
      if (media.length > 0) {
        return res.json(media);
      }
    } catch (err: any) {
      console.error('Error fetching media from MongoDB:', err);
    }
  }

  // Local JSON fallback
  const properties = readProperties();
  const property = properties.find(p => p.id === propertyId);
  if (!property) return res.status(404).json({ error: 'Property not found' });

  const mediaList = [
    ...(property.images || []).map(url => ({ propertyId, url, type: 'image' })),
    ...(property.videos || []).map(url => ({ propertyId, url, type: 'video' }))
  ];
  res.json(mediaList);
});

// GET /api/properties/:id — public
router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  if (useMongoDB) {
    try {
      const property = await PropertyModel.findOne({ id }).lean();
      if (property) return res.json(property);
    } catch (err: any) {
      console.error('MongoDB find error:', err);
    }
  }

  const properties = readProperties();
  const property = properties.find(p => p.id === id);
  if (!property) return res.status(404).json({ error: 'Property not found' });
  res.json(property);
});

// POST /api/properties — protected, create or update property
router.post('/', authMiddleware, async (req: Request, res: Response) => {
  const id = req.body.id || uuidv4();
  const images = req.body.images || [];
  const videos = req.body.videos || [];

  const propertyData: PropertyItem = {
    id,
    title: req.body.title || '',
    location: req.body.location || '',
    superArea: req.body.superArea || '',
    price: req.body.price || 'Contact for Price',
    status: req.body.status || 'Available',
    transaction: req.body.transaction || 'New',
    description: req.body.description || '',
    images,
    videos,
    category: req.body.category || 'residential',
    createdAt: req.body.createdAt || new Date().toISOString()
  };

  if (useMongoDB) {
    try {
      // Upsert property document
      const savedProp = await PropertyModel.findOneAndUpdate(
        { id },
        { ...propertyData },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      // Split media into Media collection to bypass 16MB document limit and ensure cloud scalability
      await MediaModel.deleteMany({ propertyId: id });
      const mediaDocs = [
        ...images.map((url: string) => ({ propertyId: id, url, type: 'image' })),
        ...videos.map((url: string) => ({ propertyId: id, url, type: 'video' }))
      ];
      if (mediaDocs.length > 0) {
        await MediaModel.insertMany(mediaDocs);
      }

      return res.status(201).json(savedProp);
    } catch (err: any) {
      console.error('MongoDB save error, writing to JSON fallback:', err);
    }
  }

  // Local JSON fallback
  let properties = readProperties();
  const existingIdx = properties.findIndex(p => p.id === id);
  if (existingIdx !== -1) {
    properties[existingIdx] = { ...properties[existingIdx], ...propertyData };
  } else {
    properties.unshift(propertyData);
  }
  writeProperties(properties);
  res.status(201).json(propertyData);
});

// PUT /api/properties/:id — protected, update property
router.put('/:id', authMiddleware, async (req: Request, res: Response) => {
  const id = req.params.id;

  if (useMongoDB) {
    try {
      const updated = await PropertyModel.findOneAndUpdate(
        { id },
        { $set: req.body },
        { new: true }
      );
      if (updated) {
        if (req.body.images || req.body.videos) {
          await MediaModel.deleteMany({ propertyId: id });
          const mediaDocs = [
            ...(req.body.images || updated.images || []).map((url: string) => ({ propertyId: id, url, type: 'image' })),
            ...(req.body.videos || updated.videos || []).map((url: string) => ({ propertyId: id, url, type: 'video' }))
          ];
          if (mediaDocs.length > 0) await MediaModel.insertMany(mediaDocs);
        }
        return res.json(updated);
      }
    } catch (err: any) {
      console.error('MongoDB update error:', err);
    }
  }

  const properties = readProperties();
  const index = properties.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  properties[index] = {
    ...properties[index],
    ...req.body
  };
  writeProperties(properties);
  res.json(properties[index]);
});

// DELETE /api/properties/:id — protected
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  const id = req.params.id;

  if (useMongoDB) {
    try {
      await PropertyModel.deleteOne({ id });
      await MediaModel.deleteMany({ propertyId: id });
      return res.json({ success: true });
    } catch (err: any) {
      console.error('MongoDB delete error:', err);
    }
  }

  let properties = readProperties();
  const before = properties.length;
  properties = properties.filter(p => p.id !== id);
  if (properties.length === before) return res.status(404).json({ error: 'Not found' });
  writeProperties(properties);
  res.json({ success: true });
});

export default router;
