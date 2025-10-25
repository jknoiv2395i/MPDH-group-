import React from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const Affordable = () => {
  useSEO(SEO_PAGES.affordableFlats);

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">Affordable Flats in Nagpur</h1>
        <p className="text-lg text-gray-700 mb-6">Search affordable flats in Nagpur across emerging localities like Besa, Beltarodi and Wathoda. MPHD Group lists options under 30-50 lakhs and helps buyers secure the best deals and finance options.</p>
        <section className="prose max-w-none">
          <h2>Budget-Friendly Options</h2>
          <p>We curate verified budget homes, 1BHK and 2BHK apartments with transparent pricing to help first-time buyers and investors find value-driven properties in Nagpur.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affordable;
