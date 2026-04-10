import fs from 'fs';
import path from 'path';
import { SiteContent, defaultContent } from '../src/shared/schema';

const DATA_DIR = path.join(process.cwd(), 'server', 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');

export const readContent = (): SiteContent => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    
    if (!fs.existsSync(CONTENT_FILE)) {
      // Seed with default content
      fs.writeFileSync(CONTENT_FILE, JSON.stringify(defaultContent, null, 2), 'utf-8');
      return defaultContent;
    }

    const data = fs.readFileSync(CONTENT_FILE, 'utf-8');
    return JSON.parse(data) as SiteContent;
  } catch (error) {
    console.error('Error reading content:', error);
    return defaultContent;
  }
};

export const writeContent = (content: SiteContent): boolean => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing content:', error);
    return false;
  }
};
