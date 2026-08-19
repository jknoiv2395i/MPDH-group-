import mongoose, { Schema, Document } from 'mongoose';
import { PropertyCategory } from '../../src/shared/schema';

export interface IProperty extends Document {
  id: string;
  title: string;
  location: string;
  superArea: string;
  price: string;
  status: string;
  transaction: string;
  description: string;
  images: string[];
  videos: string[];
  category: PropertyCategory;
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  location: { type: String, default: '' },
  superArea: { type: String, default: '' },
  price: { type: String, default: 'Contact for Price' },
  status: { type: String, default: 'Available' },
  transaction: { type: String, default: 'New' },
  description: { type: String, default: '' },
  images: { type: [String], default: [] },
  videos: { type: [String], default: [] },
  category: {
    type: String,
    required: true,
    enum: ['residential', 'residential-rental', 'commercial', 'commercial-rental', 'industrial'],
    index: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (_doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

export const PropertyModel = mongoose.models.Property || mongoose.model<IProperty>('Property', PropertySchema);
