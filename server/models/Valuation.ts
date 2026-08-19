import mongoose, { Schema, Document } from 'mongoose';

export interface IValuation extends Document {
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  size?: string;
  expectedPrice?: string;
  notes?: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: Date;
}

const ValuationSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  propertyType: { type: String, default: 'residential' },
  location: { type: String, required: true },
  size: { type: String },
  expectedPrice: { type: String },
  notes: { type: String },
  status: { type: String, enum: ['pending', 'contacted', 'completed'], default: 'pending' }
}, {
  timestamps: true
});

export const ValuationModel = mongoose.models.Valuation || mongoose.model<IValuation>('Valuation', ValuationSchema);
