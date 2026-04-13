"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import { getAssetPath } from "@/lib/paths"

const stats = [
    { value: "300+", label: "Students Guided" },
    { value: "Multiple", label: "Selections & Recommendations" },
    { value: "7+", label: "Years Teaching Exp" },
    { value: "100%", label: "Concept Clarity" },
]

const cadets = [
    {
        name: "Cadet Mahadev Bhosale",
        course: "TECH ENTRY",
        rank: "Recommended",
        image: "/results/hall-1.jpg",
        quote: "SDCI transformed my personality. The GTO ground training was a game changer."
    },
    {
        name: "Cadet Sanskar",
        course: "NDA",
        rank: "  ",
        image: "/results/hall-2.jpg",
        quote: "The faculty here doesn't just teach, they mentor. Grateful for the guidance."
    },
    {
        name: "Cadet Soham Hudge",
        course: "TES ENTRY",
        rank: "Recommended",
        image: "/results/hall-3.jpg",
        quote: "Sikar's best defence academy. The disciplined environment is exactly what you need."
    },
]

export function Results() {
    return (
        <section className="py-20 bg-[var(--color-navy)] relative overflow-hidden" id="results">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-military-pattern opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <p className="font-heading text-4xl md:text-5xl text-[var(--color-saffron)] mb-2">{stat.value}</p>
                            <p className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Success Stories Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[var(--color-gold)] font-bold tracking-wider uppercase text-sm">Hall of Fame</span>
                        <h2 className="font-heading text-4xl md:text-5xl text-white mt-2">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-gold)]">Pride</span>
                        </h2>
                        <p className="text-gray-400 mt-4 text-lg">
                            Join the league of extraordinary gentlemen and women who marched from SDCI to the National Defence Academy.
                        </p>
                    </div>
                    <Link href="/gallery">
                        <Button variant="outline" className="border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-navy">
                            View All Selections <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                {/* Cadets Carousel/Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cadets.map((cadet, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden group shadow-2xl">
                            <div className="relative h-64 overflow-hidden">
                                {/* Use standard img tag for external placeholder or Next Image with configured domain */}
                                <div className="absolute inset-0 bg-gray-900" style={{ backgroundImage: `url(${getAssetPath(cadet.image)})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <span className="inline-block px-2 py-1 bg-[var(--color-saffron)] text-white text-xs font-bold rounded-sm mb-2">{cadet.course}</span>
                                        <h3 className="text-white text-xl font-bold">{cadet.name}</h3>
                                        <p className="text-[var(--color-gold)] text-sm font-medium">{cadet.rank}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[var(--color-saffron)]">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                                <p className="text-gray-600 text-sm italic leading-relaxed">"{cadet.quote}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-[var(--color-navy)] flex items-center justify-center text-xs text-white">
                                <span className="font-bold">+{i}k</span>
                            </div>
                        ))}
                    </div>
                    <p className="ml-6 text-gray-400 text-sm flex items-center">Join 1000+ selected candidates</p>
                </div>
            </div>
        </section>
    )
}
