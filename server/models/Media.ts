import mongoose, { Schema, Document } from 'mongoose';

export interface IMedia extends Document {
  propertyId: string;
  url: string;
  type: 'image' | 'video';
  base64Data?: string;
  filename?: string;
  createdAt: Date;
}

const MediaSchema: Schema = new Schema({
  propertyId: { type: String, required: true, index: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], default: 'image' },
  base64Data: { type: String },
  filename: { type: String },
}, {
  timestamps: true
});

export const MediaModel = mongoose.models.Media || mongoose.model<IMedia>('Media', MediaSchema);
