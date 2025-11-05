import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import AIAssistantPage from "./pages/AIAssistant";
import ResidentialProperties from "./pages/ResidentialProperties";
import CommercialProperties from "./pages/CommercialProperties";
import CommercialRental from "./pages/CommercialRental";
import ResidentialRental from "./pages/ResidentialRental";
import Industrial from "./pages/Industrial";
import ServiceAreasPage from "./pages/ServiceAreas";
import BuyResidential from "./pages/BuyResidential";
import TwoBHK from "./pages/2BHKFlats";
import ThreeBHK from "./pages/3BHKApartments";
import Luxury from "./pages/LuxuryProperties";
import Affordable from "./pages/AffordableFlats";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import LocationSpecificPage, { ResidentialNagpur440008, CommercialNagpur440008 } from "./pages/LocationPages";
import TheBrandt from "./pages/TheBrandt";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/properties" element={<ResidentialProperties />} />
          <Route path="/residential" element={<ResidentialProperties />} />
          <Route path="/residential-rental" element={<ResidentialRental />} />
          <Route path="/commercial" element={<CommercialProperties />} />
          <Route path="/commercial-rental" element={<CommercialRental />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/the-brandt" element={<TheBrandt />} />

          {/* Targeted service pages */}
          <Route path="/buy-residential-property-nagpur" element={<BuyResidential />} />
          <Route path="/2bhk-flats-nagpur" element={<TwoBHK />} />
          <Route path="/3bhk-apartments-nagpur" element={<ThreeBHK />} />
          <Route path="/luxury-properties-nagpur" element={<Luxury />} />
          <Route path="/affordable-flats-nagpur" element={<Affordable />} />

          {/* Location-specific pages for local SEO */}
          <Route path="/location/:area" element={<LocationSpecificPage />} />
          <Route path="/residential-nagpur-440008" element={<ResidentialNagpur440008 />} />
          <Route path="/commercial-nagpur-440008" element={<CommercialNagpur440008 />} />

          {/* Friendly location URLs - redirect to /location/:area */}
          <Route path="/property-in-mihan-nagpur" element={<Navigate to="/location/mihan" replace />} />
          <Route path="/property-in-dharampeth-nagpur" element={<Navigate to="/location/dharampeth" replace />} />
          <Route path="/property-on-wardha-road-nagpur" element={<Navigate to="/location/wardha-road" replace />} />
          <Route path="/property-in-besa-nagpur" element={<Navigate to="/location/besa" replace />} />
          <Route path="/property-in-pratap-nagar-nagpur" element={<Navigate to="/location/pratap-nagar" replace />} />
          <Route path="/flats-in-beltarodi-nagpur" element={<Navigate to="/location/beltarodi" replace />} />
          <Route path="/property-on-koradi-road-nagpur" element={<Navigate to="/location/koradi-road" replace />} />
          <Route path="/flats-in-manish-nagar-nagpur" element={<Navigate to="/location/manish-nagar" replace />} />
          <Route path="/property-in-sadar-nagpur" element={<Navigate to="/location/sadar" replace />} />
          <Route path="/flats-in-ramdaspeth-nagpur" element={<Navigate to="/location/ramdaspeth" replace />} />
          <Route path="/property-on-katol-road-nagpur" element={<Navigate to="/location/katol-road" replace />} />
          <Route path="/flats-on-hingna-road-nagpur" element={<Navigate to="/location/hingna-road" replace />} />
          <Route path="/property-on-amravati-road-nagpur" element={<Navigate to="/location/amravati-road" replace />} />
          <Route path="/flats-in-laxmi-nagar-nagpur" element={<Navigate to="/location/laxmi-nagar" replace />} />
          <Route path="/property-in-sonegaon-nagpur" element={<Navigate to="/location/sonegaon" replace />} />
          <Route path="/property-in-byramji-town-nagpur" element={<Navigate to="/location/byramji-town" replace />} />
          <Route path="/flats-in-wathoda-nagpur" element={<Navigate to="/location/wathoda" replace />} />
          <Route path="/property-friends-colony-nagpur" element={<Navigate to="/location/friends-colony" replace />} />
          <Route path="/flats-in-jaitala-nagpur" element={<Navigate to="/location/jaitala" replace />} />
          <Route path="/property-in-ajni-nagpur" element={<Navigate to="/location/ajni" replace />} />
          <Route path="/flats-in-gokulpeth-nagpur" element={<Navigate to="/location/gokulpeth" replace />} />
          <Route path="/property-trimurti-nagar-nagpur" element={<Navigate to="/location/trimurti-nagar" replace />} />
          <Route path="/flats-in-shankar-nagar-nagpur" element={<Navigate to="/location/shankar-nagar" replace />} />
          <Route path="/property-in-gandhibagh-nagpur" element={<Navigate to="/location/gandhibagh" replace />} />
          <Route path="/property-in-lakadganj-nagpur" element={<Navigate to="/location/lakadganj" replace />} />

          {/* Blog routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
