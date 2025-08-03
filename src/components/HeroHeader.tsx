import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Building, Briefcase, User, Phone } from "lucide-react";

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Properties', url: '/properties', icon: Building },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'About', url: '/about', icon: User },
  { name: 'Contact', url: '/contact', icon: Phone }
];

const HeroHeader = () => {
  return (
    <NavBar 
      items={navItems} 
      logo={{
        src: "/lovable-uploads/9e6feb2d-d79a-4d3f-bdcc-55a2747446a7.png",
        alt: "MPHD Group",
        href: "/"
      }}
    />
  );
};
export default HeroHeader;