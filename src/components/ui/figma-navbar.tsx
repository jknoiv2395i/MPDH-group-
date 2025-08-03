"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  hasDropdown?: boolean
}

interface NavBarProps {
  className?: string
}

const navItems: NavItem[] = [
  { name: 'Link One', url: '/' },
  { name: 'Link Two', url: '/properties' },
  { name: 'Link Three', url: '/services' },
  { name: 'Link Four', url: '/about', hasDropdown: true },
]

export function FigmaNavBar({ className }: NavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-[#131313] text-white",
      className
    )}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-lg md:text-xl font-bold text-white">
            Logo
          </div>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.url}
                className={cn(
                  "flex items-center text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200",
                  hoveredItem === item.name && "text-white"
                )}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="flex items-center">
          <a
            href="/contact"
            className="text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden bg-[#131313] border-t border-white/10">
        <nav className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="flex items-center justify-between text-white/80 hover:text-white transition-colors duration-200 py-2"
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4" />
              )}
            </a>
          ))}
          <a
            href="/contact"
            className="block text-white/80 hover:text-white transition-colors duration-200 py-2 border-t border-white/10 mt-3 pt-3"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
