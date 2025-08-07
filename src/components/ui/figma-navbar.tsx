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
      "absolute top-0 left-0 right-0 z-50 bg-transparent text-white",
      className
    )}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe8d1f6446c8d4337adc2ecc52e9ca401%2F818d35f2f02e4bd0a6a439e55a89fd6a?format=webp&width=800"
            alt="MPHD GROUP Logo"
            className="h-12 w-auto mr-auto"
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 mx-auto">
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
        <div className="hidden md:flex items-center">
          <a
            href="https://c81dcd8934204bc39d562f1debf9ab43-8e591c7522cc4e05a161006e3.fly.dev/services"
            className="px-6 py-2 bg-white text-[black] rounded-full text-sm lg:text-base font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex flex-col items-center justify-center w-8 h-8 text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className={cn(
              "block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
            )}></span>
            <span className={cn(
              "block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out my-1",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
            )}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#131313] border-t border-white/10">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="flex items-center justify-between text-white/80 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
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
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
