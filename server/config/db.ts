import mongoose from 'mongoose';
import { PropertyModel } from '../models/Property';
import { SettingsModel } from '../models/Settings';
import { MediaModel } from '../models/Media';
import { readProperties } from '../properties';
import { readContent } from '../content';

export let useMongoDB = false;

export async function connectDB(): Promise<boolean> {
  const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI || process.env.MONGO;

  if (!mongoURI) {
    console.log('⚠️ [Database] No MONGODB_URI provided in environment variables.');
    console.log('📦 [Database] Operating in Local JSON Storage fallback mode.');
    useMongoDB = false;
    return false;
  }

  try {
    console.log('⏳ [Database] Attempting connection to MongoDB Atlas...');
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 8000,
    });
    useMongoDB = true;
    console.log('✅ [Database] Successfully connected to MongoDB Atlas!');

    // Auto-seed cloud database with current data if it is empty
    try {
      const propertyCount = await PropertyModel.countDocuments();
      if (propertyCount === 0) {
        console.log('🌱 [Database] Fresh MongoDB detected. Seeding properties to cloud...');
        const localProps = readProperties();
        if (localProps.length > 0) {
          await PropertyModel.insertMany(localProps);
          // Seed media documents
          const allMedia: any[] = [];
          localProps.forEach(p => {
            (p.images || []).forEach(url => allMedia.push({ propertyId: p.id, url, type: 'image' }));
            (p.videos || []).forEach(url => allMedia.push({ propertyId: p.id, url, type: 'video' }));
          });
          if (allMedia.length > 0) {
            await MediaModel.insertMany(allMedia);
          }
          console.log(`✅ [Database] Seeded ${localProps.length} properties to MongoDB Atlas.`);
        }
      }

      const settingsCount = await SettingsModel.countDocuments();
      if (settingsCount === 0) {
        const localContent = readContent();
        await SettingsModel.create({ key: 'site_content', content: localContent });
        console.log('✅ [Database] Seeded site content settings to MongoDB Atlas.');
      }
    } catch (seedErr: any) {
      console.warn('⚠️ [Database] Cloud seeding notice:', seedErr.message);
    }

    return true;
  } catch (error: any) {
    console.warn('⚠️ [Database] MongoDB connection failed:', error.message);
    console.log('📦 [Database] Gracefully falling back to Local JSON storage mode.');
    useMongoDB = false;
    return false;
  }
}
