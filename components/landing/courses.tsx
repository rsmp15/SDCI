"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"

const courses = [
    {
        category: "NDA",
        items: [
            {
                title: "Two Year Integrated Foundation Course",
                target: "For 10th Passed Students",
                duration: "2 Years (11th + 12th + NDA)",
                features: ["Schooling + Coaching", "Board Exam Prep", "SSB Basics", "Physical Training"],
                color: "bg-blue-600"
            },
            {
                title: "One Year Target Course",
                target: "For 12th Passed/Appearing",
                duration: "1 Year",
                features: ["Complete Syllabus Coverage", "Weekly Mock Tests", "Doubt Sessions", "SSB Guidance"],
                color: "bg-navy"
            },
            {
                title: "Crash Course",
                target: "For Upcoming Exam",
                duration: "3 - 4 Months",
                features: ["Intensive Revision", "Previous Year Papers", "Short Tricks", "Test Series"],
                color: "bg-[var(--color-saffron)]"
            }
        ]
    },
    {
        category: "CDS/AFCAT",
        items: [
            {
                title: "CDS Written Exam Batch",
                target: "For Graduates",
                duration: "6 Months",
                features: ["GS, English, Maths", "Current Affairs", "Test Series", "Personal Mentorship"],
                color: "bg-green-700"
            },
            {
                title: "AFCAT Special Batch",
                target: "For Graduates",
                duration: "4 Months",
                features: ["Reasoning & Aptitude Focus", "Online Test Practice", "Air Force GK", "Speed Tests"],
                color: "bg-sky-600"
            }
        ]
    },
    {
        category: "SSB",
        items: [
            {
                title: "SSB Interview Intensive",
                target: "Written Qualified Candidates",
                duration: "14 / 21 Days",
                features: ["Psychological Tests", "GTO Ground Tasks", "Mock Interviews", "PPDT Practice"],
                color: "bg-[var(--color-gold)]"
            }
        ]
    }
]

export function Courses() {
    const [activeTab, setActiveTab] = useState("NDA")

    return (
        <section className="py-24 bg-white" id="courses">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-saffron)] font-bold tracking-wider uppercase text-sm">Our Programs</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-navy mt-2 mb-6">
                        Tailored Courses for <span className="text-[var(--color-green)]">Every Aspirant</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Whether you are just out of school or completing your graduation, we have a specialized module to help you wear the uniform.
                    </p>
                </div>

                <Tabs defaultValue="NDA" className="w-full flex flex-col items-center">
                    <TabsList className="mb-12 bg-gray-100 p-1 rounded-full border border-gray-200">
                        {courses.map((cat) => (
                            <TabsTrigger
                                key={cat.category}
                                value={cat.category}
                                className="rounded-full px-8 py-3 text-sm md:text-base font-semibold data-[state=active]:bg-[var(--color-navy)] data-[state=active]:text-white transition-all"
                            >
                                {cat.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {courses.map((cat) => (
                        <TabsContent key={cat.category} value={cat.category} className="w-full max-w-6xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up-fade">
                                {cat.items.map((course, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full group">
                                        <div className={`h-2 ${course.color} w-full`} />
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-wide uppercase mb-3">
                                                    {course.target}
                                                </span>
                                                <h3 className="text-2xl font-bold text-navy leading-tight group-hover:text-[var(--color-saffron)] transition-colors">
                                                    {course.title}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                            </div>

                                            <ul className="space-y-3 mb-8 flex-1">
                                                {course.features.map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-green)] shrink-0" />
                                                        {feat}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link href="/apply">
                                                <Button className="w-full bg-navy text-white hover:bg-[var(--color-saffron)] group-hover:shadow-lg transition-all" variant="outline">
                                                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
