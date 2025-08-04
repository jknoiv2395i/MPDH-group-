"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
interface NavItem {
  name: string;
  url: string;
  hasDropdown?: boolean;
}
interface NavBarProps {
  className?: string;
}
const navItems: NavItem[] = [{
  name: 'Link One',
  url: '/'
}, {
  name: 'Link Two',
  url: '/properties'
}, {
  name: 'Link Three',
  url: '/services'
}, {
  name: 'Link Four',
  url: '/about',
  hasDropdown: true
}];
export function FigmaNavBar({
  className
}: NavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <header className={cn("relative top-0 left-0 right-0 z-50 bg-[#1E9CE8] text-white", className)}>
      <div className="flex items-center justify-between h-16 pt-3 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fea71525dd8ea470bb0c07f096721fbd7%2Fe2fe31a91f7045c5bd3420234e7b7a67" alt="MPHD GROUP Real Estate Logo" className="h-32 w-auto mr-auto" />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map(item => <div key={item.name} className="relative" onMouseEnter={() => setHoveredItem(item.name)} onMouseLeave={() => setHoveredItem(null)}>
              <a href={item.url} className={cn("flex items-center text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200", hoveredItem === item.name && "text-white")}>
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
            </div>)}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center">
          <a href="/contact" className="px-6 py-2 bg-white text-[black] rounded-full text-sm lg:text-base font-medium hover:bg-gray-50 transition-colors duration-200 sm:ml-auto">
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && <div className="md:hidden border-t border-white/10 bg-[1E9CE8] bg-[#20a2f0]">
          <nav className="px-4 py-4 space-y-3 bg-[1E9CE8] bg-[#219ee9]">
            {navItems.map(item => <a key={item.name} href={item.url} className="flex items-center justify-between text-white/80 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>)}
            <a href="/contact" className="block text-white/80 hover:text-white transition-colors duration-200 py-2 border-t border-white/10 mt-3 pt-3" onClick={() => setIsMobileMenuOpen(false)}>
              Contact us
            </a>
          </nav>
        </div>}
    </header>;
}