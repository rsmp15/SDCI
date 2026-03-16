"use client"

import { Button } from "@/components/ui/button"
import { Shield, Star, ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#ff8c00] via-[#ff7300] to-[#e65c00] py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-float" />
        
        {/* Geometric pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Premier Defence Academy</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider animate-fade-in-up delay-100 leading-none">
              Sudhanshu Defence
              <span className="block text-white/90">Career Institute</span>
            </h1>
            
            <div className="w-32 h-1.5 bg-white mx-auto lg:mx-0 mb-8 animate-fade-in-left delay-200" />
            
            <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed animate-fade-in-up delay-300">
              Embark on a Career of Valor with Sudhanshu Defence Career Institute, 
              led by experienced defence veterans, boasting over two decades of expertise 
              in defence recruitment.
            </p>
            
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-10 tracking-widest animate-fade-in-up delay-400">
              &quot;TO EDUCATE IS TO EMPOWER&quot;
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-500">
              <Button 
                size="lg"
                className="bg-white text-[#ff8c00] hover:bg-white/90 font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                Join Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#ff8c00] font-bold px-8 py-6 text-lg bg-transparent transition-all hover:-translate-y-1"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start animate-fade-in-up delay-500">
              {[
                { number: "300+", label: "Selections" },
                { number: "20+", label: "Years Experience" },
                { number: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-heading text-4xl text-white">{stat.number}</p>
                  <p className="text-white/70 text-sm tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex-1 flex justify-center animate-scale-in delay-300">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-300/30 to-orange-500/30 rounded-full blur-xl animate-pulse-glow" />
              
              {/* Main logo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-full flex items-center justify-center shadow-2xl animate-float">
                <div className="absolute inset-2 border-4 border-dashed border-[#ff8c00]/30 rounded-full" />
                
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-[#ff8c00] via-[#ff7300] to-[#e65c00] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                  {/* Inner pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.1)_70%)]" />
                  </div>
                  
                  <div className="text-white text-center relative z-10">
                    <div className="flex justify-center mb-2">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold tracking-widest uppercase">Sudhanshu Defence</p>
                    <p className="font-heading text-6xl md:text-7xl tracking-wider my-2">SDCI</p>
                    <p className="text-sm font-semibold tracking-widest uppercase">Career Institute</p>
                    <div className="w-16 h-0.5 bg-white/50 mx-auto mt-3" />
                    <p className="text-[10px] mt-2 tracking-[0.2em] uppercase opacity-80">Est. 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
