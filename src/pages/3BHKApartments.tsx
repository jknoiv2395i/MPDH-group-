import React from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const ThreeBHK = () => {
  useSEO(SEO_PAGES['3bhkApartments']);

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">3BHK Apartments in Nagpur</h1>
        <p className="text-lg text-gray-700 mb-6">Discover spacious 3 bhk apartment nagpur options for families seeking comfort and modern amenities. MPHD Group lists premium 3BHK flats, with options in Dharampeth, Seminary Hills and other family-friendly localities.</p>
        <section className="prose max-w-none">
          <h2>Why Choose a 3BHK</h2>
          <p>3BHK homes are ideal for growing families and those seeking extra space for work-from-home or guest use. We focus on properties with good natural light, ventilation, and community amenities.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThreeBHK;
