import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db';
import contentRoutes, { handleLogin, handleUpdateContent, verifyAdmin } from './routes/content';
import propertiesRoutes from './routes/properties';
import uploadRoutes from './routes/upload';
import valuationRoutes from './routes/valuation';
import analyticsRoutes from './routes/analytics';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Serve local uploaded files fallback
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Direct API alias endpoints per spec
app.post('/api/login', handleLogin);
app.post('/api/settings', verifyAdmin, handleUpdateContent);

// Main Modular Routes
app.use('/api/content', contentRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/valuation', valuationRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start Server and connect to MongoDB Atlas
app.listen(PORT, async () => {
  console.log(`🚀 [Server] Running on port ${PORT}`);
  await connectDB();
});
