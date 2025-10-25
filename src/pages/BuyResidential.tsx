import React from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const BuyResidential = () => {
  useSEO(SEO_PAGES.buyResidential);

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">Buy Residential Property in Nagpur</h1>
        <p className="text-lg text-gray-700 mb-6">MPHD Group helps buyers looking to buy home in Nagpur, offering verified listings across residential localities including KT Nagar, Dharampeth, Wardha Road, and more. Whether you search for ready to move flats in Nagpur or under construction projects, our curated listings include 1BHK, 2BHK and 3BHK options to suit every budget.</p>
        <section className="prose max-w-none">
          <h2>Why Buy in Nagpur</h2>
          <p>Buyers searching for property for sale in Nagpur value strong connectivity, educational institutions, and growing infrastructure. Areas like MIHAN, Wardha Road and Dharampeth show consistent demand. MPHD Group provides market insights, price trends, and support on home loan and legal checks to streamline your purchase.</p>
          <h3>Property Types</h3>
          <ul>
            <li>Ready to Move Flats in Nagpur</li>
            <li>Under Construction Projects and Pre-Launch Offers</li>
            <li>Independent Houses and Plots</li>
            <li>2BHK &amp; 3BHK family homes</li>
          </ul>
          <p>Contact MPHD Group to schedule a site visit, get detailed pricing and compare similar listings across Nagpur. We prioritise verified documentation and transparent pricing so you can buy property in Nagpur with confidence.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuyResidential;
