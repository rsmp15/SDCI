import Image from "next/image"
import { Quote } from "lucide-react"
import { getAssetPath } from "@/lib/paths"

export function About() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Academy Info */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block">
                                About The Academy
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl text-navy">
                                Dedicated to <span className="text-[var(--color-saffron)]">Excellence</span> in Defence Training
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                SDCI is a premier institution dedicated to Defence Services Exams, established with a vision to empower the youth of India. Our experienced guidance and concept-based teaching methodology ensure that every aspirant understands the 'why' behind the concepts, not just the 'how'.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We believe in small batches for personal attention, strategy-driven mathematics preparation, and providing a disciplined environment that fosters the growth of future officers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[var(--color-navy)]">
                                <p className="font-bold text-navy text-lg">Mentorship</p>
                                <p className="text-gray-600">Exam Temperament Training</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[var(--color-navy)]">
                                <p className="font-bold text-navy text-lg">Location</p>
                                <p className="text-gray-600">Dhanori, Pune</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[var(--color-navy)]">
                                <p className="font-bold text-navy text-lg">Experience</p>
                                <p className="text-gray-600">7+ Years Teaching Math</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[var(--color-navy)]">
                                <p className="font-bold text-navy text-lg">Focus</p>
                                <p className="text-gray-600">Logic & Pattern Recognition</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Director Profile */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute inset-0 bg-[var(--color-navy)] transform rotate-3 rounded-2xl opacity-10 group-hover:rotate-6 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-[var(--color-saffron)] transform -rotate-3 rounded-2xl opacity-10 group-hover:-rotate-6 transition-transform duration-300" />

                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-gold)] shadow-lg mb-4">
                                    <Image
                                        src={getAssetPath("/director.jpg")}
                                        alt="Mr. Sudhanshu Kumar Tiwari"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-navy">Mr. Sudhanshu Kumar Tiwari</h3>
                                    <p className="text-[var(--color-green)] font-medium">Founder & Director</p>
                                    <p className="text-xs text-gray-500 mt-1">Alumni Sainik School Satara</p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {['NDA', 'CDS', 'AFCAT', 'SSR', 'Airman', 'JEE'].map((exam) => (
                                        <span key={exam} className="px-2 py-1 bg-gray-100 text-[10px] uppercase font-bold text-navy rounded-sm">
                                            Cleared {exam}
                                        </span>
                                    ))}
                                </div>

                                <div className="relative px-6 py-4 bg-gray-50 rounded-xl mt-4">
                                    <Quote className="absolute top-2 left-2 w-6 h-6 text-[var(--color-saffron)] opacity-30" />
                                    <p className="text-gray-700 italic relative z-10 text-sm">
                                        "Mathematics is a strategy subject, not a fear subject. My goal is to ensure students understand why a method works, empowering them with logic and confidence."
                                    </p>
                                </div>

                                <div className="w-full pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-500">
                                        A visionary educator who has cleared multiple defence exams and is dedicated to mentoring the next generation of officers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
