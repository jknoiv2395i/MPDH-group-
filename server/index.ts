import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contentRoutes from './routes/content';
import propertiesRoutes from './routes/properties';
import uploadRoutes from './routes/upload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve uploaded files as static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/content', contentRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/upload', uploadRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('(.*)', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
