import { Router, Request, Response } from 'express';
import { useMongoDB } from '../config/db';
import { ValuationModel } from '../models/Valuation';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VALUATION_FILE = path.join(__dirname, '..', 'data', 'valuations.json');

const router = Router();

// POST /api/valuation — public endpoint to submit property valuation request
router.post('/', async (req: Request, res: Response) => {
  const { name, phone, email, propertyType, location, size, expectedPrice, notes } = req.body;

  if (!name || !phone || !location) {
    return res.status(400).json({ error: 'Name, phone, and location are required.' });
  }

  const valuationData = {
    name,
    phone,
    email: email || '',
    propertyType: propertyType || 'residential',
    location,
    size: size || '',
    expectedPrice: expectedPrice || '',
    notes: notes || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  if (useMongoDB) {
    try {
      const doc = await ValuationModel.create(valuationData);
      return res.status(201).json({ success: true, valuation: doc });
    } catch (err: any) {
      console.error('MongoDB valuation save error:', err);
    }
  }

  // Local JSON fallback
  try {
    const dir = path.dirname(VALUATION_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    let existing: any[] = [];
    if (fs.existsSync(VALUATION_FILE)) {
      existing = JSON.parse(fs.readFileSync(VALUATION_FILE, 'utf-8'));
    }
    existing.unshift({ id: Date.now().toString(), ...valuationData });
    fs.writeFileSync(VALUATION_FILE, JSON.stringify(existing, null, 2));
    res.status(201).json({ success: true, message: 'Valuation request submitted successfully' });
  } catch (err: any) {
    console.error('File write error for valuation:', err);
    res.status(500).json({ error: 'Failed to submit valuation' });
  }
});

export default router;
