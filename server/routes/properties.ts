import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { readProperties, writeProperties } from '../properties';
import { PropertyItem, PropertyCategory } from '../../src/shared/schema';

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

// GET /api/properties — public, with optional category filter
router.get('/', (req: Request, res: Response) => {
  const properties = readProperties();
  const category = req.query.category as string | undefined;
  if (category) {
    return res.json(properties.filter(p => p.category === category));
  }
  res.json(properties);
});

// GET /api/properties/:id — public
router.get('/:id', (req: Request, res: Response) => {
  const properties = readProperties();
  const property = properties.find(p => p.id === req.params.id);
  if (!property) return res.status(404).json({ error: 'Not found' });
  res.json(property);
});

// POST /api/properties — protected, create new property
router.post('/', authMiddleware, (req: Request, res: Response) => {
  const properties = readProperties();
  const newProperty: PropertyItem = {
    id: uuidv4(),
    title: req.body.title || '',
    location: req.body.location || '',
    superArea: req.body.superArea || '',
    price: req.body.price || 'Contact for Price',
    status: req.body.status || 'Available',
    transaction: req.body.transaction || 'New',
    description: req.body.description || '',
    images: req.body.images || [],
    videos: req.body.videos || [],
    category: req.body.category || 'residential',
    createdAt: new Date().toISOString()
  };
  properties.push(newProperty);
  writeProperties(properties);
  res.status(201).json(newProperty);
});

// PUT /api/properties/:id — protected, update property
router.put('/:id', authMiddleware, (req: Request, res: Response) => {
  const properties = readProperties();
  const index = properties.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  properties[index] = {
    ...properties[index],
    title: req.body.title ?? properties[index].title,
    location: req.body.location ?? properties[index].location,
    superArea: req.body.superArea ?? properties[index].superArea,
    price: req.body.price ?? properties[index].price,
    status: req.body.status ?? properties[index].status,
    transaction: req.body.transaction ?? properties[index].transaction,
    description: req.body.description ?? properties[index].description,
    images: req.body.images ?? properties[index].images,
    videos: req.body.videos ?? properties[index].videos,
    category: req.body.category ?? properties[index].category,
  };
  writeProperties(properties);
  res.json(properties[index]);
});

// DELETE /api/properties/:id — protected
router.delete('/:id', authMiddleware, (req: Request, res: Response) => {
  let properties = readProperties();
  const before = properties.length;
  properties = properties.filter(p => p.id !== req.params.id);
  if (properties.length === before) return res.status(404).json({ error: 'Not found' });
  writeProperties(properties);
  res.json({ success: true });
});

export default router;
