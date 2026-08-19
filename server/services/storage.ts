import dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

// ─── 1. Cloudinary Configuration (25 GB Free Storage & Auto-Optimization) ────
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
const apiKey = process.env.CLOUDINARY_API_KEY || '';
const apiSecret = process.env.CLOUDINARY_API_SECRET || '';
const cloudinaryUrl = process.env.CLOUDINARY_URL || '';

let useCloudinary = false;

if (cloudinaryUrl || (cloudName && apiKey && apiSecret)) {
  try {
    if (cloudinaryUrl) {
      cloudinary.config({ url: cloudinaryUrl });
    } else {
      cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret,
        secure: true,
      });
    }
    useCloudinary = true;
    console.log('☁️ [Storage] Cloudinary initialized (25 GB Cloud Storage Active)!');
  } catch (err: any) {
    console.warn('⚠️ [Storage] Cloudinary initialization failed:', err.message);
    useCloudinary = false;
  }
}

// ─── 2. Supabase Storage Fallback ───────────────────────────────────────────
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || '';
const BUCKET_NAME = process.env.SUPABASE_BUCKET || 'kimi-properties';

let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('☁️ [Storage] Supabase Storage client initialized for bucket:', BUCKET_NAME);
  } catch (err: any) {
    supabase = null;
  }
}

if (!useCloudinary && !supabase) {
  console.log('ℹ️ [Storage] No Cloudinary or Supabase credentials. Operating in Cloud Base64 fallback mode.');
}

/**
 * Uploads a multer memory file to Cloudinary (25GB) -> Supabase -> Base64.
 */
export async function uploadFileToCloud(file: Express.Multer.File): Promise<string> {
  const isVideo = file.mimetype.startsWith('video/');

  // 1. Primary: Cloudinary (25 GB)
  if (useCloudinary) {
    try {
      return await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'mphd-properties',
            resource_type: isVideo ? 'video' : 'image',
            format: isVideo ? undefined : 'webp', // Auto-convert images to super-fast modern WebP
            quality: 'auto:good',
          },
          (error, result) => {
            if (error || !result) {
              return reject(error || new Error('Upload failed'));
            }
            resolve(result.secure_url);
          }
        );
        uploadStream.end(file.buffer);
      });
    } catch (err: any) {
      console.warn('⚠️ [Storage] Cloudinary upload error, trying next fallback:', err.message);
    }
  }

  // 2. Secondary: Supabase Storage
  if (supabase) {
    try {
      const ext = path.extname(file.originalname).toLowerCase() || (isVideo ? '.mp4' : '.jpg');
      const filename = `${Date.now()}-${uuidv4()}${ext}`;
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(`uploads/${filename}`, file.buffer, {
          contentType: file.mimetype,
          upsert: true
        });

      if (!error && data) {
        const { data: publicData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(`uploads/${filename}`);
        if (publicData?.publicUrl) return publicData.publicUrl;
      }
    } catch (err: any) {
      console.warn('⚠️ [Storage] Supabase upload error:', err.message);
    }
  }

  // 3. Cloud-Portable Base64 Fallback
  const base64Data = file.buffer.toString('base64');
  const mimeType = file.mimetype || (isVideo ? 'video/mp4' : 'image/jpeg');
  return `data:${mimeType};base64,${base64Data}`;
}
