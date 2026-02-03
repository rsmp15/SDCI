"use client"

import Image from "next/image"
import { Play, ImageIcon, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "First batch of Agni Vayu at Sambra training institute",
    caption: "First batch of Agni Vayu at Sambra training institute. Our cadets training at premier facilities.",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Director with dignitaries",
    caption: "Director felicitated by dignitaries for outstanding contribution to defence training.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Cadet training session",
    caption: "Cadets during physical training session at the academy.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Award ceremony",
    caption: "Annual award ceremony celebrating our successful cadets.",
    span: "col-span-2 row-span-1",
  },
]

export default function Gallery() {
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
    <section ref={sectionRef} id="gallery" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric-accent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-[#ff8c00] rounded-full text-sm font-semibold tracking-wide mb-4">
            <ImageIcon className="w-4 h-4" />
            GLIMPSES
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-gradient-orange mb-6 tracking-wider">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6600] mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Glimpses of our academy, training sessions, and success celebrations
          </p>
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${image.span} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white text-sm md:text-base font-medium leading-relaxed">{image.caption}</p>
                <div className="flex items-center gap-2 mt-3 text-white/80 text-xs">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Full</span>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl text-gray-800 tracking-wider">Watch Our Training Videos</h3>
            <p className="text-gray-600 mt-2">See how we prepare cadets for their dream careers</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Video frame decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#ff8c00] to-[#e65c00] rounded-3xl opacity-20 blur-xl" />
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="SDCI Training Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              
              {/* Play button overlay (decorative) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                  <Play className="w-10 h-10 text-[#ff8c00] ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
