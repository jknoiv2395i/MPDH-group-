import React from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const TwoBHK = () => {
  useSEO(SEO_PAGES['2bhkFlats']);

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">2BHK Flats in Nagpur</h1>
        <p className="text-lg text-gray-700 mb-6">Find the best 2 bhk flat in Nagpur with MPHD Group. Our listings cover affordable 2BHK flats, spacious family apartments, and new projects across Nagpur. Targeted neighbourhoods include Besa, Wathoda, and Wardha Road where 2BHK demand is high.</p>
        <section className="prose max-w-none">
          <h2>Find Affordable &amp; Premium 2BHK Options</h2>
          <p>Whether you want 2 bhk under 50 lakhs in Nagpur or premium designs with modern amenities, our curated inventory helps you filter by price, locality and amenities like gym, parking and security.</p>
          <p>MPHD Group assists with negotiation, legal due diligence, and home loan coordination to ensure a smooth buying experience for 2BHK buyers.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TwoBHK;
