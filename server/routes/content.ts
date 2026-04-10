import express from 'express';
import { readContent, writeContent } from '../content';
import jwt from 'jsonwebtoken';

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

// GET current content
router.get('/', (req, res) => {
  const content = readContent();
  res.json(content);
});

// PUT update content
router.put('/', verifyAdmin, (req, res) => {
  const success = writeContent(req.body);
  if (success) {
    res.json({ success: true, message: 'Content updated successfully' });
  } else {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// POST login
router.post('/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (password === adminPassword) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

export default router;
