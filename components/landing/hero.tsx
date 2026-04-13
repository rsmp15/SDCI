"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Shield, Users, Loader2 } from "lucide-react"
import { sendLeadEmail } from "@/app/actions/sendEmail"
import { getAssetPath } from "@/lib/paths"

export function Hero() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.target as HTMLFormElement
        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            mobile: (form.elements.namedItem('mobile') as HTMLInputElement).value,
            currentClass: (form.querySelector('[name="currentClass"]') as HTMLInputElement)?.value || 'Not selected',
            targetExam: (form.querySelector('[name="targetExam"]') as HTMLInputElement)?.value || 'Not selected',
        }

        const result = await sendLeadEmail(formData)
        
        setIsSubmitting(false)
        if (result.success) {
            setIsSubmitted(true)
        } else {
            alert("Payment issue or server error. Please try again or contact us via WhatsApp.")
        }
    }

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${getAssetPath("/hero-bg.jpg")}')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/40 mix-blend-multiply" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-saffron)] animate-pulse" />
                            <span className="text-xs md:text-sm font-medium tracking-wide">NDA • CDS • AFCAT • SSB • Foundation (11th-12th) </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-lg">
                                <span className="block text-xl md:text-2xl mb-4 text-[var(--color-saffron)] font-sans tracking-[0.2em] uppercase animate-fade-in">
                                    Sudhanshu Defence Career Institute
                                </span>
                                Forge Leaders for the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-gold)]">
                                    Armed Forces
                                </span>{" "}
                                of Tomorrow
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                                Join India's premier defence academy guided by veterans.
                                Experience holistic training, disciplined residential campus, and highest selection ratios.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/apply">
                                <Button size="lg" className="bg-[var(--color-saffron)] hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-orange-900/30 transform hover:-translate-y-1 transition-all">
                                    Apply for 2026 Admissions
                                </Button>
                            </Link>
                            <a href="https://wa.me/919572456393" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="border-white/30 text-[var(--color-saffron)] hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
                                    Talk to Counsellor
                                </Button>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex flex-wrap gap-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                    <Shield className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">500+</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Officers Made</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                    <Users className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">Highest</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Selection Ratio</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">Veteran</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Led Training</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Lead Form */}
                    <div className="lg:pl-10 animate-slide-in-right">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[450px] flex flex-col justify-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-saffron)] via-[var(--color-gold)] to-[var(--color-green)]" />

                            {isSubmitted ? (
                                <div className="text-center space-y-4 py-10 animate-scale-in">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                                        <CheckCircle2 className="w-12 h-12 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                                    <p className="text-gray-300">Our team will call you back shortly for free counselling.</p>
                                    <Button
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Send another request
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-1">Start Your Journey</h3>
                                        <p className="text-sm text-gray-300">Request a callback from our defence experts.</p>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-gray-300 ml-1">Name</label>
                                                <Input name="name" required placeholder="Cadet Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[var(--color-saffron)] focus:ring-[var(--color-saffron)]" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-gray-300 ml-1">Mobile</label>
                                                <Input name="mobile" required type="tel" placeholder="+91" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[var(--color-saffron)] focus:ring-[var(--color-saffron)]" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-gray-300 ml-1">Current Class</label>
                                            <Select name="currentClass" required>
                                                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-[var(--color-saffron)] focus:ring-[var(--color-saffron)]">
                                                    <SelectValue placeholder="Select Class" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10">Class 10th (Passed/Appearing)</SelectItem>
                                                    <SelectItem value="11">Class 11th</SelectItem>
                                                    <SelectItem value="12">Class 12th</SelectItem>
                                                    <SelectItem value="grad">Graduate</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-gray-300 ml-1">Target Exam</label>
                                            <Select name="targetExam" required>
                                                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-[var(--color-saffron)] focus:ring-[var(--color-saffron)]">
                                                    <SelectValue placeholder="Select Exam" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="nda">NDA</SelectItem>
                                                    <SelectItem value="cds">CDS</SelectItem>
                                                    <SelectItem value="afcat">AFCAT</SelectItem>
                                                    <SelectItem value="ssb">SSB Interview</SelectItem>
                                                    <SelectItem value="foundation">Foundation (11th+12th+NDA)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[var(--color-saffron)] hover:bg-orange-600 text-white font-bold py-6 text-lg mt-2 shadow-lg"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : "Get Free Counselling"}
                                        </Button>

                                        <p className="text-[10px] text-center text-gray-400 mt-3">
                                            By submitting, you agree to receive exam updates via WhatsApp/SMS.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative chevron/shape at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-[var(--background)] to-transparent z-10" />
        </section>
    )
}
