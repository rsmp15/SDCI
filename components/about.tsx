"use client"

import { Target, Award, Users, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Target,
    title: "Focused Training",
    description: "Comprehensive coaching for NDA, CDS, AFCAT, and SSB preparation",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Hundreds of successful cadets selected in defence forces",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Experienced defence veterans as instructors",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: BookOpen,
    title: "Complete Curriculum",
    description: "Well-structured courses covering all exam requirements",
    color: "from-orange-600 to-red-600",
  },
]

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-geometric-accent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#ff8c00] rounded-full text-sm font-semibold tracking-wide mb-4">
            WHO WE ARE
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-gradient-orange mb-6 tracking-wider">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6600] mx-auto mb-8" />
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            At Sudhanshu Defence Career Institute, we take pride in nurturing the aspirations 
            of individuals seeking a distinguished career in the armed forces. Our roots trace 
            back to a visionary leader with over two decades of glorious service in the Indian 
            Defence Forces. Inspired by a passion for both service and education, he seamlessly 
            blended his extensive experience with academic brilliance, creating a unique institution 
            that stands as a beacon for aspirants.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mt-4">
            Join us at SDCI, where tradition meets innovation, and aspirations take flight. 
            Unleash your potential, and let us guide you towards a rewarding career in the armed forces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 transition-all duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
