import Footer from "@/components/Footer";
import { ServiceAreas as ServiceAreasSection } from "@/components/LocalAreaPages";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";

const ServiceAreasPage = () => {
  if (SEO_PAGES.serviceAreas) {
    useSEO(SEO_PAGES.serviceAreas);
  }

  return (
    <>
      <ServiceAreasSection />
      <Footer />
    </>
  );
};

export default ServiceAreasPage;
