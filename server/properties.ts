import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PropertyItem } from '../src/shared/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const PROPERTIES_FILE = path.join(DATA_DIR, 'properties.json');

// ALL properties from all 5 sections
const seedProperties: PropertyItem[] = [
  // ─── Residential (Purchase) ────────────────────────────────────────────────
  {
    id: "res-1",
    title: "2BHK Sq.Ft. Residential Apartment for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Residential Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/5d04d2129d0e188bc5ec457cb7466a090c13a14f?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-2",
    title: "3BHK Sq.Ft. Luxury Residential Complex",
    location: "Dharampeth, Civil Lines, Nagpur",
    superArea: "2 BHK 1200 Sqft  3 BHK 1800 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Premium residential complex with modern amenities and facilities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/e59ba35efbf2405f339389978d3d9dd401a2a22e?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-3",
    title: "4BHK Sq.Ft. Premium Residential Tower",
    location: "Sadar, Central Nagpur",
    superArea: "3 BHK 1800 Sqft  4 BHK 2500 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Luxury residential tower with panoramic city views and premium finishes",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/2b5878af095bb2656d03030baa2637696d0395dd?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-4",
    title: "2BHK Sq.Ft. Modern Residential Complex",
    location: "Hingna Road, MIDC Area, Nagpur",
    superArea: "2 BHK 1100 Sqft  3 BHK 1500 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Contemporary design with all modern amenities and green spaces",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/0f9c4d78a1ad72b82637afb6a3f83661e5d6ad44?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-5",
    title: "1BHK Sq.Ft. Affordable Housing Project",
    location: "Kharbi, Outer Ring Road, Nagpur",
    superArea: "1 BHK 650 Sqft  2 BHK 950 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Budget-friendly residential options with essential amenities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/1c0cc0c8a24e747af13ae6b60142a6f9fe9e8c78?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-6",
    title: "3BHK Sq.Ft. Gated Community Homes",
    location: "Manish Nagar, Somalwada, Nagpur",
    superArea: "2 BHK 1300 Sqft  3 BHK 1900 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Secure gated community with clubhouse and recreational facilities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/66b2636d037411b3f5f0d7f7dd3107e9e40ab5fe?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-7",
    title: "4BHK Sq.Ft. Ultra-Luxury Apartments",
    location: "Ramdaspeth, Central Avenue, Nagpur",
    superArea: "3 BHK 2200 Sqft  4 BHK 3200 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ultra-luxury apartments with premium specifications and concierge services",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-8",
    title: "2BHK Sq.Ft. Smart Home Residences",
    location: "Wadi, Ring Road, Nagpur",
    superArea: "2 BHK 1150 Sqft  3 BHK 1650 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Smart home technology integrated residential complex with IoT features",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"],
    videos: [],
    category: "residential",
    createdAt: new Date().toISOString()
  },

  // ─── Residential Rental ────────────────────────────────────────────────────
  {
    id: "res-rent-1",
    title: "2BHK Sq.Ft. Residential Apartment for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Residential Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/67eda5106c40ad3e39ccac23e6ec50a740e8e80d?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-2",
    title: "3BHK Sq.Ft. Luxury Residential Complex for Rent",
    location: "Dharampeth, Civil Lines, Nagpur",
    superArea: "2 BHK 1200 Sqft  3 BHK 1800 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Premium residential complex with modern amenities and facilities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/21152f603136f92b81c4fb8c7e90f664bed12447?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-3",
    title: "4BHK Sq.Ft. Premium Residential Tower for Rent",
    location: "Sadar, Central Nagpur",
    superArea: "3 BHK 1800 Sqft  4 BHK 2500 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Luxury residential tower with panoramic city views and premium finishes",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/b61db5873243761954da7b7964e0054c5802814a?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-4",
    title: "2BHK Sq.Ft. Modern Residential Complex for Rent",
    location: "Hingna Road, MIDC Area, Nagpur",
    superArea: "2 BHK 1100 Sqft  3 BHK 1500 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Contemporary design with all modern amenities and green spaces",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/11ccd5edf5c891f97d9396cb6971f89a5afbb43d?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-5",
    title: "1BHK Sq.Ft. Affordable Housing Project for Rent",
    location: "Kharbi, Outer Ring Road, Nagpur",
    superArea: "1 BHK 650 Sqft  2 BHK 950 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Budget-friendly residential options with essential amenities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/c60afbe2850fb4eb3f2bd8b615eac0749367762a?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-6",
    title: "3BHK Sq.Ft. Gated Community Homes for Rent",
    location: "Manish Nagar, Somalwada, Nagpur",
    superArea: "2 BHK 1300 Sqft  3 BHK 1900 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Secure gated community with clubhouse and recreational facilities",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-7",
    title: "4BHK Sq.Ft. Ultra-Luxury Apartments for Rent",
    location: "Ramdaspeth, Central Avenue, Nagpur",
    superArea: "3 BHK 2200 Sqft  4 BHK 3200 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ultra-luxury apartments with premium specifications and concierge services",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/84ab656698e35324a6747f12226ceaf23b95b4b3?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "res-rent-8",
    title: "2BHK Sq.Ft. Smart Home Residences for Rent",
    location: "Wadi, Ring Road, Nagpur",
    superArea: "2 BHK 1150 Sqft  3 BHK 1650 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Smart home technology integrated residential complex with IoT features",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/cbe45a6d508c66c1ac5e8041e0d4907537cd837d?width=1485"],
    videos: [],
    category: "residential-rental",
    createdAt: new Date().toISOString()
  },

  // ─── Commercial (Purchase) ─────────────────────────────────────────────────
  {
    id: "com-1",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/ab39aee17e8dfc110c4406ef7bd747ab417b4863?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-2",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/3516253f2a4dd9d4bb90f1da4907439836a4a595?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-3",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/39b522303573f6ccd129067f1a6b9f68a3641994?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-4",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/8752f51c0207253b582bf2ba338156fa9f00f25e?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-5",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/6e54b10b09d9d55567ab9329f1fb65ad275bb773?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-6",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/971c65cb802603f188e530ca9fbb0e8bd45881eb?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-7",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-8",
    title: "22163 Sq.Ft. Commercial Office/Space for Sale",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Ready to Move",
    transaction: "New",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"],
    videos: [],
    category: "commercial",
    createdAt: new Date().toISOString()
  },

  // ─── Commercial Rental ─────────────────────────────────────────────────────
  {
    id: "com-rent-1",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/0cde9d4c0a28abff220953a8f47e85f4a66851b2?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-2",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/58f913a126708769cfeacf636332370ecb81872b?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-3",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/39b522303573f6ccd129067f1a6b9f68a3641994?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-4",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/8752f51c0207253b582bf2ba338156fa9f00f25e?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-5",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/6e54b10b09d9d55567ab9329f1fb65ad275bb773?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-6",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/971c65cb802603f188e530ca9fbb0e8bd45881eb?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-7",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },
  {
    id: "com-rent-8",
    title: "22163 Sq.Ft. Commercial Office/Space for Rent",
    location: "KT Nagar, Friends Colony, Nagpur",
    superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Rent",
    description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"],
    videos: [],
    category: "commercial-rental",
    createdAt: new Date().toISOString()
  },

  // ─── Industrial ────────────────────────────────────────────────────────────
  {
    id: "ind-1",
    title: "Casting Yard Setup and Installation Support",
    location: "Pan India",
    superArea: "Custom",
    price: "Contact for Price",
    status: "Available",
    transaction: "Lease",
    description: "End-to-end casting yard solutions for construction and infrastructure projects.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F1fd1d1f8412a4dce8463b6c049b2e13b"],
    videos: [],
    category: "industrial",
    createdAt: new Date().toISOString()
  },
  {
    id: "ind-2",
    title: "1300+ Vendor Network",
    location: "Pan India",
    superArea: "Custom",
    price: "Contact for Price",
    status: "Available",
    transaction: "Service",
    description: "Strong network of 1300+ trusted vendors across India for construction, infrastructure, and real estate.",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/01bd9f15b36dd98048084a7476883ad1d1fc4ae7?width=1485"],
    videos: [],
    category: "industrial",
    createdAt: new Date().toISOString()
  },
  {
    id: "ind-3",
    title: "22163 Sq.Ft. Industrial Space for Lease",
    location: "Hingna MIDC, Nagpur",
    superArea: "22163 Sqft",
    price: "Contact for Price",
    status: "Available",
    transaction: "Lease",
    description: "Large industrial space with heavy equipment provision and loading dock access",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/0cde9d4c0a28abff220953a8f47e85f4a66851b2?width=1485"],
    videos: [],
    category: "industrial",
    createdAt: new Date().toISOString()
  },
  {
    id: "ind-4",
    title: "Warehouse & Logistics Hub",
    location: "Butibori MIDC, Nagpur",
    superArea: "Custom",
    price: "Contact for Price",
    status: "Available",
    transaction: "Lease",
    description: "Modern warehouse and logistics hub with excellent highway connectivity",
    images: ["https://api.builder.io/api/v1/image/assets/TEMP/58f913a126708769cfeacf636332370ecb81872b?width=1485"],
    videos: [],
    category: "industrial",
    createdAt: new Date().toISOString()
  }
];

export function readProperties(): PropertyItem[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(PROPERTIES_FILE)) {
      fs.writeFileSync(PROPERTIES_FILE, JSON.stringify(seedProperties, null, 2));
      return seedProperties;
    }
    const data = fs.readFileSync(PROPERTIES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return seedProperties;
  }
}

export function writeProperties(properties: PropertyItem[]): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(PROPERTIES_FILE, JSON.stringify(properties, null, 2));
}
