"use client"

import Image from "next/image"
import { Trophy, Star, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const successStories = [
  {
    name: "Rahul Sharma",
    achievement: "NDA-152",
    rank: "Selected",
    image: "/images/cadet-1.jpg",
  },
  {
    name: "Priya Patel",
    achievement: "NDA-153",
    rank: "Merit List",
    image: "/images/cadet-2.jpg",
  },
  {
    name: "Amit Verma",
    achievement: "NDA-153",
    rank: "CPSS Cleared",
    image: "/images/cadet-3.jpg",
  },
  {
    name: "Neha Singh",
    achievement: "NDA-153",
    rank: "Selected",
    image: "/images/cadet-4.jpg",
  },
  {
    name: "Vikram Kumar",
    achievement: "AIR 53 & AIR 560",
    rank: "Top Performer",
    description: "Made it to the final merit list for the prestigious NDA examination",
    image: "/images/cadet-5.jpg",
  },
]

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric-accent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-[#ff8c00] rounded-full text-sm font-semibold tracking-wide mb-4">
            <Trophy className="w-4 h-4" />
            OUR PRIDE
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-gradient-orange mb-6 tracking-wider">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6600] mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our cadets have achieved remarkable success in various defence examinations. 
            Here are some of our proud achievers who are now serving the nation.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {successStories.map((story, index) => (
            <div
              key={story.name}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff8c00]/90 via-[#ff8c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Achievement badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <p className="text-xs font-bold text-[#ff8c00]">{story.achievement}</p>
                </div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center text-white">
                    <TrendingUp className="w-10 h-10 mx-auto mb-2" />
                    <p className="font-bold text-lg">{story.rank}</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 text-center">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{story.name}</h3>
                <p className="text-[#ff8c00] font-semibold text-sm mt-1">{story.achievement}</p>
                {story.description && (
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{story.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className={`mt-16 bg-gradient-to-r from-[#ff8c00] to-[#e65c00] rounded-2xl p-8 md:p-12 shadow-2xl ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Selections" },
              { number: "50+", label: "NDA Batches" },
              { number: "98%", label: "Success Rate" },
              { number: "20+", label: "Years Legacy" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-5xl md:text-6xl text-white">{stat.number}</p>
                <p className="text-white/80 text-sm md:text-base tracking-wide uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
