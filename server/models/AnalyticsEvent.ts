import mongoose, { Schema, Document } from 'mongoose';

export interface IAnalyticsEvent extends Document {
  eventType: string;
  path: string;
  ip?: string;
  userAgent?: string;
  metadata?: Record<string, any>;
  timestamp: Date;
}

const AnalyticsEventSchema: Schema = new Schema({
  eventType: { type: String, required: true, index: true },
  path: { type: String, default: '/' },
  ip: { type: String },
  userAgent: { type: String },
  metadata: { type: Schema.Types.Mixed, default: {} },
  timestamp: { type: Date, default: Date.now, index: true }
}, {
  timestamps: true
});

export const AnalyticsEventModel = mongoose.models.AnalyticsEvent || mongoose.model<IAnalyticsEvent>('AnalyticsEvent', AnalyticsEventSchema);
