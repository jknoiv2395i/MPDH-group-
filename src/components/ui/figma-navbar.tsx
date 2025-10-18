import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showPropertyPopup, setShowPropertyPopup] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  // If the Builder editor/preview is open we make header non-interactive so
  // the editor's visual controls are not blocked by page overlays.
  const isEditor = typeof window !== 'undefined' && isBuilderEditor()

  const handleLogoClick = () => {
    setShowPropertyPopup(true)
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        "absolute top-0 left-0 right-0 z-50 bg-transparent text-white",
        isEditor && "pointer-events-none",
        className
      )}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            aria-label="Choose property type"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe8d1f6446c8d4337adc2ecc52e9ca401%2F818d35f2f02e4bd0a6a439e55a89fd6a?format=webp&width=800"
              alt="MPHD Group - Real Estate Consultants Nagpur Logo"
              className="h-12 w-auto mr-auto"
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

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div
                  className={cn(
                    "absolute left-0 top-full mt-4 -translate-x-1/4",
                    (item.name === 'Residential' || item.name === 'Commercial') ? "w-[200px]" : "w-[660px]"
                  )}
                  style={{ top: '160%' }}
                >
                  <div className="bg-white rounded-[18px] border border-blue-200 shadow-lg overflow-hidden">
                    {(item.name === 'Residential' || item.name === 'Commercial') ? (
                      // Simple dropdown for Residential/Commercial
                      <div className="bg-white rounded-[18px] p-4">
                        <div className="flex flex-col gap-[12px]">
                          {(item.name === 'Residential' ? dropdownContent.residential : dropdownContent.commercial).map((page) => (
                            <a
                              key={page.name}
                              href={page.url}
                              className={cn(
                                "text-left text-[#071839] py-[10px] px-[12px] rounded-lg transition-all duration-300 whitespace-nowrap relative",
                                page.current
                                  ? "font-semibold text-[#256FE3] bg-blue-50"
                                  : "font-medium opacity-70 hover:opacity-100 hover:bg-gray-50"
                              )}
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Original 4-column dropdown for About
                      <div className="bg-white rounded-[18px] p-6 grid grid-cols-4 gap-6">
                        {/* Home Pages Column */}
                        <div className="flex flex-col gap-[18px]">
                          {dropdownContent.homePages.map((page) => (
                            <a
                              key={page.name}
                              href={page.url}
                              className={cn(
                                "text-left text-[#071839] py-[14px] transition-opacity duration-300 whitespace-nowrap relative",
                                page.current
                                  ? "font-semibold text-[#256FE3]"
                                  : "font-medium opacity-70 hover:opacity-100"
                              )}
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>

                        {/* Contact Pages Column */}
                        <div className="flex flex-col gap-[18px]">
                          {dropdownContent.contactPages.map((page) => (
                            <a
                              key={page.name}
                              href={page.url}
                              className={cn(
                                "text-left text-[#071839] py-[14px] transition-opacity duration-300 whitespace-nowrap relative",
                                page.current
                                  ? "font-semibold text-[#256FE3]"
                                  : "font-medium opacity-70 hover:opacity-100"
                              )}
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>

                        {/* Project Pages Column */}
                        <div className="flex flex-col gap-[18px]">
                          {dropdownContent.projectPages.map((page) => (
                            <a
                              key={page.name}
                              href={page.url}
                              className={cn(
                                "text-left text-[#071839] py-[14px] transition-opacity duration-300 whitespace-nowrap relative",
                                page.current
                                  ? "font-semibold text-[#256FE3]"
                                  : "font-medium opacity-70 hover:opacity-100"
                              )}
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>

                        {/* Other Pages Column */}
                        <div className="flex flex-col gap-[18px]">
                          {dropdownContent.otherPages.map((page) => (
                            <a
                              key={page.name}
                              href={page.url}
                              className={cn(
                                "text-left text-[#071839] py-[14px] transition-opacity duration-300 whitespace-nowrap relative",
                                page.current
                                  ? "font-semibold text-[#256FE3]"
                                  : "font-medium opacity-70 hover:opacity-100"
                              )}
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://77847e60805f4b2d973ac716e7f4ef79-aa781709277d4c4685ad7339f.fly.dev/services"
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
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </a>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3">
              <a
                href="/contact"
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
