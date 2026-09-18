import dotenv from 'dotenv';
dotenv.config();

import { connectDB, useMongoDB } from '../config/db';
import { SettingsModel } from '../models/Settings';
import { writeContent } from '../content';

async function main() {
  const updatedContent = {
    home: {
      heroTitle: "Build Wealth Through Real Estate",
      heroSubtitle: "Strategic Property Investments across India • Zero Commission",
      servicesTitle: "Our Services",
      consultationTitle: "Schedule a Strategy Consultation",
      consultationSubtitle: "Book a personalized consultation with a real estate expert to plan your investment."
    },
    contact: {
      phone: "+91 73877 77686",
      email: "info@mphdgroup.com",
      address: "Bhandara Road, Behind JK Tower, Small Factory Area, Bagadganj, Nagpur, Maharashtra - 440008",
      facebook: "https://facebook.com/mphdgroup",
      twitter: "https://twitter.com/mphdgroup",
      instagram: "https://instagram.com/mphdgroup",
      linkedin: "https://linkedin.com/company/mphdgroup"
    },
    about: {
      title: "About MPHD Group",
      mission: "To provide transparent, commission-free real estate investment opportunities across India.",
      vision: "To be India's most trusted real estate investment partner.",
      description: "MPHD Group provides premium real estate advisory services with a zero-brokerage model."
    },
    footer: {
      description: "Your trusted partner in Real Estate Investment & Management.",
      copyright: "© 2026 MPHD Group. All rights reserved."
    }
  };

  // Update local JSON fallback
  writeContent(updatedContent);
  console.log('✅ Updated server/data/content.json');

  // Connect to DB and update MongoDB
  const connected = await connectDB();
  if (connected) {
    await SettingsModel.findOneAndUpdate(
      { key: 'site_content' },
      { content: updatedContent },
      { upsert: true, new: true }
    );
    console.log('✅ Updated MongoDB Atlas site_content document successfully!');
  } else {
    console.log('ℹ️ MongoDB not connected, local JSON updated.');
  }

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
