"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        type: "Cadet",
        name: "Lt. Vikram Singh",
        role: "NDA 148 Course",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        text: "The discipline at SDCI is unmatched. Waking up at 5 AM, the rigorous PT, and the constant motivation from veterans changed my life. I walked in as a boy, and I walked out as a potential officer."
    },
    {
        type: "Parent",
        name: "Mrs. Anjali Gupta",
        role: "Mother of Cadet Rohan (NDA 150)",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        text: "Sending my son to SDCI was the best decision. I saw a massive transformation in his confidence and behavior within just 6 months. The faculty takes care of them like their own children."
    },
    {
        type: "Cadet",
        name: "Cadet Simran Kaur",
        role: "OTA Chennai Selected",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        text: "The SSB guidance here is phenomenal. The GTO tasks practice gave me a huge advantage during my actual SSB interview. Highly recommended for any defence aspirant."
    },
]

export function Testimonials() {
    const [filter, setFilter] = useState("All")

    const filtered = filter === "All" ? testimonials : testimonials.filter(t => t.type === filter)

    return (
        <section className="py-24 bg-white" id="testimonials">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block">Testimonials</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
                        Stories of <span className="text-[var(--color-green)]">Transformation</span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-4">
                        Hear from the cadets who lived the dream and the parents who witnessed the change.
                    </p>

                    <div className="flex justify-center gap-4 mt-8">
                        {['All', 'Cadet', 'Parent'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-[var(--color-navy)] text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                {f}s
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filtered.map((t, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-gold)] opacity-20 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-saffron)]">
                                    <div className="w-full h-full bg-gray-300" style={{ backgroundImage: `url(${t.image})`, backgroundSize: 'cover' }} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-lg">{t.name}</h4>
                                    <p className="text-sm text-[var(--color-green)] font-medium">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed italic">
                                "{t.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
