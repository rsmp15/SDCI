"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Calendar, Bell, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const notifications = [
    { date: "24 Jan", title: "NDA-1 2026 Notification Released", tag: "Exam" },
    { date: "20 Jan", title: "SSB Interview Dates for CDS-2 Declared", tag: "SSB" },
    { date: "15 Jan", title: "New Foundation Batch Starting from 1st Feb", tag: "Admission" },
    { date: "10 Jan", title: "Scholarship Test Result Announced", tag: "Result" },
]

const blogs = [
    {
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        title: "5 Tips to Crack NDA Written Exam in First Attempt",
        desc: "Expert strategy from veterans on how to manage time and syllabus...",
        date: "22 Jan 2026"
    },
    {
        image: "https://images.unsplash.com/photo-1599689035272-9a0082f4236a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        title: "Life at NDA: What to Expect?",
        desc: "A glimpse into the rigorous but rewarding life of a cadet at the academy...",
        date: "18 Jan 2026"
    },
]

export function News() {
    return (
        <section className="py-20 bg-gray-50" id="blog">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block">Updates</span>
                        <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
                            Latest <span className="text-[var(--color-green)]">News & Articles</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Notifications */}
                    <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-2 mb-6 text-navy font-bold text-xl">
                            <Bell className="w-6 h-6 text-[var(--color-saffron)]" />
                            <span>Notifications</span>
                        </div>
                        <div className="space-y-4">
                            {notifications.map((item, i) => (
                                <Link href="#contact" key={i} className="block">
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[var(--color-navy)] hover:text-white transition-colors group cursor-pointer border border-gray-100 h-full">
                                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-sm min-w-[60px] group-hover:bg-white/10 group-hover:text-white">
                                            <span className="text-xs font-bold uppercase text-gray-500 group-hover:text-white/80">{item.date.split(" ")[1]}</span>
                                            <span className="text-xl font-bold text-[var(--color-navy)] group-hover:text-white">{item.date.split(" ")[0]}</span>
                                        </div>
                                        <div>
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm mb-1 inline-block ${item.tag === 'Exam' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                                {item.tag}
                                            </span>
                                            <h4 className="font-medium text-sm leading-snug">{item.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="#contact">
                            <Button variant="link" className="w-full mt-4 text-[var(--color-navy)] font-bold">
                                View All Notification <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Right: Blog Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogs.map((blog, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gray-200" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover' }} />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-navy flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {blog.date}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-navy mb-3 group-hover:text-[var(--color-saffron)] transition-colors">{blog.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{blog.desc}</p>
                                    <Link href="#admissions">
                                        <Button variant="ghost" className="p-0 h-auto text-[var(--color-navy)] hover:text-[var(--color-saffron)] hover:bg-transparent font-bold">
                                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
