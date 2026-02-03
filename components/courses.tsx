"use client"

import { Clock, BookOpen, Users, CheckCircle, Zap, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const courses = [
  {
    title: "NDA Foundation",
    description: "Complete preparation for National Defence Academy examination",
    features: [
      "Track your progress and improve your marks",
      "Practice different varieties of questions",
      "Apply short tricks and solve problems fast",
      "Learn time management for exams",
    ],
    duration: "12 Months",
    icon: BookOpen,
    popular: false,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "NDA Crash Course",
    description: "Intensive 30-day program designed for NDA aspirants",
    features: [
      "Exclusive online classes covering entire NDA syllabus",
      "16 hours classes every day",
      "List of subjects - Maths & GAT",
      "Number of Assignments - 50",
    ],
    duration: "30 Days",
    icon: Zap,
    popular: true,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "CDS Preparation",
    description: "Combined Defence Services examination preparation",
    features: [
      "Complete coverage of CDS syllabus",
      "Expert guidance from veterans",
      "Regular mock tests and assessments",
      "Doubt clearing sessions",
    ],
    duration: "6 Months",
    icon: Users,
    popular: false,
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    title: "SSB Interview",
    description: "Comprehensive SSB interview preparation",
    features: [
      "Personality development sessions",
      "Group discussion practice",
      "Personal interview preparation",
      "Psychological test training",
    ],
    duration: "2 Weeks",
    icon: Shield,
    popular: false,
    gradient: "from-orange-600 to-red-600",
  },
]

export default function Courses() {
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
    <section ref={sectionRef} id="courses" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric-accent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-[#ff8c00] rounded-full text-sm font-semibold tracking-wide mb-4">
            <BookOpen className="w-4 h-4" />
            OUR PROGRAMS
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-gradient-orange mb-6 tracking-wider">
            NDA Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6600] mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive courses designed to prepare you for various defence examinations with proven methodologies.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${course.popular ? 'ring-2 ring-[#ff8c00] ring-offset-2' : ''}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Popular badge */}
              {course.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-[#ff8c00] to-[#e65c00] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {/* Header */}
              <div className={`bg-gradient-to-br ${course.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <course.icon className="w-14 h-14 text-white mb-4" />
                  <h3 className="font-heading text-2xl text-white tracking-wider">{course.title}</h3>
                  <p className="text-white/90 text-sm mt-2 leading-relaxed">{course.description}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-5 text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                  <Clock className="w-5 h-5 text-[#ff8c00]" />
                  <span className="font-semibold">{course.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#ff8c00] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white font-semibold py-5 group/btn`}
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
