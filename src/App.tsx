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
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { VoiceAgent } from "./components/VoiceAgent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <VoiceAgent />
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
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
