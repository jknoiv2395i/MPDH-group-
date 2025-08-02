import { Header, Button } from "@/components/ui/21st-navbar";

const menuItems = [
  {
    text: "Home",
    to: "/"
  },
  {
    text: "Properties",
    items: [
      {
        text: "Luxury Homes",
        description: "Premium residential properties",
        to: "/properties/luxury"
      },
      {
        text: "Commercial",
        description: "Office and retail spaces",
        to: "/properties/commercial"
      }
    ]
  },
  {
    text: "Services",
    to: "/services"
  },
  {
    text: "About",
    to: "/about"
  },
  {
    text: "Contact",
    to: "/contact"
  }
];

const HeroHeader = () => {
  return (
    <Header
      theme="dark"
      logo={<span className="text-xl font-bold text-white">MPHD</span>}
      menuItems={menuItems}
      rightContent={
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Get Started
        </Button>
      }
    />
  );
};
export default HeroHeader;