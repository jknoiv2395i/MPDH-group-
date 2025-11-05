import React, { useState, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import PropertyChoicePopup from './PropertyChoicePopup'
import { isBuilderEditor } from '@/lib/utils'

interface NavItem {
  name: string
  url: string
  hasDropdown?: boolean
}

interface NavBarProps {
  className?: string
}

const navItems: NavItem[] = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Residential', url: '/residential' },
  { name: 'Commercial', url: '/commercial' },
  { name: 'Industrial', url: '/industrial' },
]

export function FigmaNavBar({ className }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showPropertyPopup, setShowPropertyPopup] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // If the Builder editor/preview is open we make header non-interactive so
  // the editor's visual controls are not blocked by page overlays.
  const isEditor = typeof window !== 'undefined' && isBuilderEditor()
  const isTheBrandtPage = location.pathname === '/the-brandt'

  const handleLogoClick = () => {
    setShowPropertyPopup(false)
    navigate('/')
  }

  const handlePurchaseClick = () => {
    setShowPropertyPopup(false)
    navigate('/residential')
  }

  const handleRentClick = () => {
    setShowPropertyPopup(false)
    navigate('/residential-rental')
  }

  const handleClosePopup = () => {
    setShowPropertyPopup(false)
  }


  return (
    <header
      ref={navRef}
      className={cn(
        "absolute top-0 left-0 right-0 z-50 bg-transparent",
        isTheBrandtPage ? "text-black" : "text-white",
        isEditor && "pointer-events-none",
        className
      )}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            aria-label="Choose property type"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe8d1f6446c8d4337adc2ecc52e9ca401%2F818d35f2f02e4bd0a6a439e55a89fd6a?format=webp&width=800"
              alt="MPHD Group - Real Estate Consultants Nagpur Logo"
              className="h-[61px] w-auto mt-[5px] mr-auto"
              loading="lazy"
              decoding="async"
              width={200}
              height={61}
            />
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 mx-auto">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
            >
              <div className="flex items-center h-8 min-w-fit">
                <a
                  href={item.url}
                  className="text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
                              </div>

            </div>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://mphdgroup.com/services"
            className="px-6 py-2 bg-white text-[black] rounded-full text-sm lg:text-base font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer pointer-events-auto"
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
              </a>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3">
              <a
                href="/services"
                className="block text-white/80 hover:text-white transition-colors duration-200 py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Property Choice Popup */}
      <PropertyChoicePopup
        isOpen={showPropertyPopup}
        onClose={handleClosePopup}
        onPurchaseClick={handlePurchaseClick}
        onRentClick={handleRentClick}
      />
    </header>
  )
}
