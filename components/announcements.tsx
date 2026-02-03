"use client"

import { Bell, Star } from "lucide-react"

const announcements = [
  "Congratulations To Selected Cadets in 2024 (22 As Officers in NDA / B.Tech Entry)",
  "Upcoming Batches for 11th, 12th, NDA, JEE, MH-CET Integrated Batch Starting Soon!",
  "SSB Residential Batch with Full Obstacles And Practical Sessions Starts from Next Month",
  "Online and offline crash course conducted from 15 Mar till 18 Apr - Total 5 sessions",
  "Congratulations to SDCI cadets for clearing NDA 1/2025 and CDSE 2025",
]

export default function Announcements() {
  return (
    <div className="bg-gradient-to-r from-[#ff8c00] to-[#e65c00] py-2.5 overflow-hidden relative">
      {/* Shimmer effect */}
      <div className="absolute inset-0 animate-shimmer" />
      
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-white/20">
          <Bell className="w-4 h-4 text-white animate-pulse" />
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:inline">UPDATES</span>
        </div>
        
        {/* Scrolling content */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...announcements, ...announcements].map((announcement, index) => (
              <span key={index} className="inline-flex items-center mx-8 text-white font-medium text-sm">
                <Star className="w-3 h-3 mr-2 fill-yellow-300 text-yellow-300" />
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
