"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "Campus", href: "#campus" },
    { name: "Life at Academy", href: "#life" },
    { name: "Admissions", href: "#admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                        <Image
                            src="/logo.jpg"
                            alt="SDCI Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="font-heading text-2xl tracking-wide text-white leading-none">Sudhanshu</span>
                            <span className="text-xs text-gray-300 uppercase tracking-widest">Defence Academy</span>
                        </div>
                    </Link>
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+919572456393" className="text-white/80 hover:text-white transition-colors">
                            <Phone className="h-5 w-5" />
                        </a>
                        <Link href="/SDCI_pamphlet.jpeg" target="_blank">
                            <Button variant="outline" className="border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-navy hidden xl:flex">
                                Download Brochure
                            </Button>
                        </Link>
                        <Link href="/apply">
                            <Button className="bg-[var(--color-saffron)] hover:bg-orange-600 text-white font-bold tracking-wide shadow-lg shadow-orange-900/20">
                                APPLY NOW
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden gap-4">
                        <Link href="/apply">
                            <Button size="sm" className="bg-[var(--color-saffron)] hover:bg-orange-600 text-white font-medium text-xs">
                                APPLY
                            </Button>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-navy border-t border-white/10 animate-slide-up-fade absolute w-full shadow-2xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex justify-between items-center">
                                    {link.name}
                                    <ChevronRight className="h-4 w-4 opacity-50" />
                                </div>
                            </Link>
                        ))}
                        <div className="pt-4 pb-2 border-t border-white/10 flex flex-col gap-3 px-3">
                            <Link href="/apply">
                                <Button className="w-full bg-[var(--color-saffron)] hover:bg-orange-600 text-white">APPLY FOR 2026</Button>
                            </Link>
                            <Link href="/SDCI_pamphlet.jpeg" target="_blank">
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Download Brochure</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
