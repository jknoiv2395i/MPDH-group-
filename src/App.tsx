import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

          {/* Location-specific pages for local SEO */}
          <Route path="/location/:area" element={<LocationSpecificPage />} />
          <Route path="/residential-nagpur-440008" element={<ResidentialNagpur440008 />} />
          <Route path="/commercial-nagpur-440008" element={<CommercialNagpur440008 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
