"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/paths"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  {
    name: "Courses",
    href: "#courses",
    dropdown: [
      { name: "NDA Foundation", href: "#courses" },
      { name: "NDA Crash Course", href: "#courses" },
      { name: "CDS Preparation", href: "#courses" },
      { name: "SSB Interview", href: "#courses" },
      { name: "Sainik School", href: "#courses" },
      { name: "RIMC & RMS", href: "#courses" },
      { name: "SPI Preparation", href: "#courses" },
    ],
  },
  { name: "Result", href: "#results" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  { name: "Prospectus", href: getAssetPath("/SDCI_pamphlet.jpeg"), target: "_blank" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-white shadow-md"
        }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff8c00] to-[#e65c00] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#1a1a2e] rounded-full flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">SD</span>
              </div>
            </div>
            <div>
              <h1 className="font-heading text-2xl text-[#ff8c00] leading-none tracking-wider">
                SDCI
              </h1>
              <p className="text-xs font-semibold text-gray-600 tracking-wide">Sudhanshu Defence</p>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">Where Dreams Come True</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#ff8c00] font-medium transition-colors rounded-lg hover:bg-orange-50"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${openDropdown === item.name
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                    >
                      <div className="bg-white shadow-xl rounded-xl py-2 min-w-48 border border-gray-100 overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff7300] hover:text-white transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    target={item.target}
                    className="px-4 py-2 text-gray-700 hover:text-[#ff8c00] font-medium transition-colors rounded-lg hover:bg-orange-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Button
              className="ml-4 bg-gradient-to-r from-[#ff8c00] to-[#e65c00] hover:from-[#e67e00] hover:to-[#d45500] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="pb-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-[#ff8c00] font-medium border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 bg-gray-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-gray-600 hover:text-[#ff8c00] text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="w-full mt-4 bg-gradient-to-r from-[#ff8c00] to-[#e65c00] text-white font-semibold"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
