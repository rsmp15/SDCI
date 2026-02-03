"use client"

import Image from "next/image"
import { Star, Medal, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Director() {
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
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#ff8c00] via-[#ff7300] to-[#e65c00] py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        
        {/* Decorative pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="director-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#director-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Director Image */}
          <div className={`flex-shrink-0 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-white/10 rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 bg-white/10 rounded-2xl transform -rotate-3" />
              
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/director.jpg"
                  alt="Director - Sudhanshu Defence Career Institute"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <Medal className="w-8 h-8 text-[#ff8c00] mx-auto" />
                  <p className="text-[10px] font-bold text-gray-800 mt-1">VETERAN</p>
                </div>
              </div>
            </div>
            
            <div className={`mt-12 text-center lg:text-left ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <h3 className="font-heading text-4xl text-white tracking-wider">Prof. SUDHANSHU KUMAR</h3>
              <div className="flex items-center gap-2 mt-3 justify-center lg:justify-start">
                <GraduationCap className="w-5 h-5 text-white/80" />
                <p className="text-white/90 text-base">
                  B.Tech, MA, MBA (HR), NET, LLB
                </p>
              </div>
              <p className="text-white/80 text-base mt-1">PGDISS & PD, DLL & LW</p>
              <p className="text-white font-heading text-2xl mt-3 tracking-widest">INDIAN DEFENCE &quot;VETERAN&quot;</p>
            </div>
          </div>

          {/* Director Bio */}
          <div className={`flex-1 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <h4 className="font-heading text-3xl text-white mb-6 tracking-wider">Our Founder&apos;s Journey</h4>
              
              <div className="space-y-6">
                <p className="text-white/95 text-lg leading-relaxed">
                  With a distinguished career spanning over two decades in the Indian Defence Forces, 
                  Prof. Sudhanshu Kumar embarked on his journey of service to the nation. Recognized 
                  for his exceptional dedication and outstanding performance, he has served at various 
                  strategically vital forward bases. His remarkable contributions during his service 
                  underscored his commitment to the nation.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  His service journey spanned diverse locations, including various critical postings 
                  across the country. After a colorful tenure, he voluntarily retired from the Indian 
                  Defence Forces to pursue his passion for education.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Demonstrating intellectual prowess, he pursued academic excellence alongside his 
                  service duties, earning qualifications such as MA, MBA (HR), NET, B.Tech, LLB, 
                  PGDISS & PD, DLL & LW. A prolific researcher, he has co-authored multiple research 
                  papers on various Defence and Human Resources Management topics.
                </p>
                <p className="text-white/95 text-lg leading-relaxed font-medium">
                  After retiring, he harbored a deep passion for teaching. Choosing to dedicate himself 
                  to shaping the next generation of leaders, he established Sudhanshu Defence Career 
                  Institute, a premier pre-recruitment training center dedicated to helping aspirants 
                  achieve their dreams of serving in the defence forces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
