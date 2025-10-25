import React from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const Luxury = () => {
  useSEO(SEO_PAGES.luxuryProperties);

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">Luxury Properties in Nagpur</h1>
        <p className="text-lg text-gray-700 mb-6">Explore luxury flats, penthouses and villas in Nagpur curated by MPHD Group. We specialize in high-end properties in prime localities such as Dharampeth and Seminary Hills with premium amenities and secure gated communities.</p>
        <section className="prose max-w-none">
          <h2>Premium Listings &amp; Bespoke Services</h2>
          <p>Our luxury property service includes personalized viewings, tailored negotiation, and dedicated after-sales support to ensure a premium buying experience.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Luxury;
