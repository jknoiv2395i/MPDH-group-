import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { useMongoDB } from '../config/db';
import { AnalyticsEventModel } from '../models/AnalyticsEvent';
import { ValuationModel } from '../models/Valuation';
import { PropertyModel } from '../models/Property';
import { readProperties } from '../properties';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-prod';

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

// GET /api/analytics/audit — returns compiled audit reports of traffic and leads
router.get('/audit', authMiddleware, async (req: Request, res: Response) => {
  try {
    let totalProperties = 0;
    let categoryCounts: Record<string, number> = {};
    let recentLeads: any[] = [];
    let trafficSummary = {
      totalViews: 0,
      recentEvents: [] as any[]
    };

    if (useMongoDB) {
      totalProperties = await PropertyModel.countDocuments();
      const categories = ['residential', 'residential-rental', 'commercial', 'commercial-rental', 'industrial'];
      for (const cat of categories) {
        categoryCounts[cat] = await PropertyModel.countDocuments({ category: cat });
      }
      recentLeads = await ValuationModel.find().sort({ createdAt: -1 }).limit(10).lean();
      trafficSummary.totalViews = await AnalyticsEventModel.countDocuments({ eventType: 'pageview' });
      trafficSummary.recentEvents = await AnalyticsEventModel.find().sort({ timestamp: -1 }).limit(20).lean();
    } else {
      const properties = readProperties();
      totalProperties = properties.length;
      properties.forEach(p => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
      });
    }

    res.json({
      databaseMode: useMongoDB ? 'MongoDB Atlas (Cloud Active)' : 'Local JSON Fallback',
      serverTime: new Date().toISOString(),
      properties: {
        total: totalProperties,
        breakdown: categoryCounts
      },
      leads: {
        total: recentLeads.length,
        recent: recentLeads
      },
      traffic: trafficSummary
    });
  } catch (error: any) {
    console.error('Audit report error:', error);
    res.status(500).json({ error: 'Failed to generate audit report' });
  }
});

// POST /api/analytics/event — public event logging
router.post('/event', async (req: Request, res: Response) => {
  const { eventType, path: eventPath, metadata } = req.body;
  if (!eventType) return res.status(400).json({ error: 'Event type required' });

  if (useMongoDB) {
    try {
      await AnalyticsEventModel.create({
        eventType,
        path: eventPath || '/',
        ip: req.ip || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'] || '',
        metadata: metadata || {}
      });
    } catch (err) {
      // Non-blocking
    }
  }

  res.status(202).json({ recorded: true });
});

export default router;
