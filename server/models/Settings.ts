import mongoose, { Schema, Document } from 'mongoose';
import { SiteContent } from '../../src/shared/schema';

export interface ISettings extends Document {
  key: string;
  content: SiteContent;
  updatedAt: Date;
}

const SettingsSchema: Schema = new Schema({
  key: { type: String, required: true, unique: true, default: 'site_content' },
  content: { type: Schema.Types.Mixed, required: true },
}, {
  timestamps: true
});

export const SettingsModel = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
