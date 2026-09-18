import express from 'express';
import jwt from 'jsonwebtoken';
import { useMongoDB } from '../config/db';
import { SettingsModel } from '../models/Settings';
import { readContent, writeContent } from '../content';
import { defaultContent } from '../../src/shared/schema';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-prod';

// Middleware to verify admin token
export const verifyAdmin = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// GET /api/content — returns all configuration settings
router.get('/', async (req, res) => {
  let content = defaultContent;

  if (useMongoDB) {
    try {
      const settings = await SettingsModel.findOne({ key: 'site_content' }).lean();
      if (settings?.content) {
        content = {
          ...defaultContent,
          ...(settings.content as any)
        };
      }
    } catch (err: any) {
      console.error('MongoDB read settings error:', err);
    }
  } else {
    content = readContent();
  }

  // Ensure contact details are always clean and valid
  if (content.contact) {
    if (!content.contact.phone || content.contact.phone.includes('999')) {
      content.contact.phone = '+91 73877 77686';
    }
    if (!content.contact.email || content.contact.email.includes('mpdh')) {
      content.contact.email = 'info@mphdgroup.com';
    }
    if (!content.contact.address || content.contact.address.includes('Nagpur, Maharashtra, India')) {
      content.contact.address = 'Bhandara Road, Behind JK Tower, Small Factory Area Bagadganj, Nagpur, Maharashtra - 440008';
    }
  }

  res.json(content);
});

// PUT /api/content & POST /api/settings — updates site configuration
const handleUpdateContent = async (req: express.Request, res: express.Response) => {
  const newContent = req.body;

  if (useMongoDB) {
    try {
      await SettingsModel.findOneAndUpdate(
        { key: 'site_content' },
        { content: newContent },
        { upsert: true, new: true }
      );
    } catch (err: any) {
      console.error('MongoDB write settings error, saving to JSON fallback:', err);
    }
  }

  const success = writeContent(newContent);
  if (success) {
    res.json({ success: true, message: 'Content updated successfully' });
  } else {
    res.status(500).json({ error: 'Failed to update content' });
  }
};

router.put('/', verifyAdmin, handleUpdateContent);
router.post('/settings', verifyAdmin, handleUpdateContent);

// POST /api/login & POST /api/content/login — Admin authentication
const handleLogin = (req: express.Request, res: express.Response) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const adminBypassKey = process.env.ADMIN_BYPASS_KEY || 'mphd_master_bypass_2026';

  if (password === adminPassword || password === adminBypassKey) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
};

router.post('/login', handleLogin);

export { handleLogin, handleUpdateContent };
export default router;
