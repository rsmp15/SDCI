import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Rocket } from "lucide-react"
import { getAssetPath } from "@/lib/paths"

export function AdmissionCTA() {
    return (
        <section className="py-20 bg-[var(--color-saffron)] relative overflow-hidden" id="admissions">
            <div className="absolute inset-0 bg-military-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-navy)] mb-6 drop-shadow-md">
                    Admissions Open for <span className="text-white">2026-27</span>
                </h2>
                <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    Don't just dream of the uniform. Earn it. Limited seats available for the upcoming NDA & Foundation batches.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/apply">
                        <Button size="lg" className="bg-white text-[var(--color-saffron)] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            <Rocket className="w-5 h-5 mr-2" /> Apply Online
                        </Button>
                    </Link>
                    <Link href={getAssetPath("/SDCI_Brochure.pdf")} target="_blank">
                        <Button size="lg" variant="outline" className="border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white font-bold text-lg px-8 py-6">
                            <Download className="w-5 h-5 mr-2" /> Download Prospectus
                        </Button>
                    </Link>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white/80 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">1</span>
                        Register Online
                    </div>
                    <div className="hidden md:block w-12 h-px bg-white/30" />
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">2</span>
                        Entrance Test
                    </div>
                    <div className="hidden md:block w-12 h-px bg-white/30" />
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">3</span>
                        Join Academy
                    </div>
                </div>
            </div>
        </section>
    )
}
