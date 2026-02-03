import Link from "next/link"
import { Bell, FileText, Calendar, ChevronRight } from "lucide-react"

const announcements = [
    { text: "NDA-1 2026 New Batch starting from 15th February.", type: "New", link: "#" },
    { text: "SSB Interview Guidance Camp - Limited Seats Available!", type: "Admission", link: "#" },
    { text: "CDS-2 2025 Written Exam Results Announced - Check Now", type: "Result", link: "#" },
    { text: "Download NDA-2 2025 Answer Key & Solution PDF", type: "Download", link: "#" },
]

export function Ticker() {
    return (
        <div className="bg-navy border-y border-white/10 relative overflow-hidden h-12 flex items-center">
            <div className="absolute left-0 top-0 bottom-0 z-20 bg-[var(--color-saffron)] px-4 flex items-center gap-2 shadow-md">
                <span className="text-white font-bold text-sm tracking-wider uppercase">Updates</span>
                <div className="absolute top-0 right-0 translate-x-full border-[24px] border-l-[var(--color-saffron)] border-t-transparent border-b-transparent border-r-transparent h-0 w-0" />
            </div>

            <div className="w-full overflow-hidden flex items-center">
                <div className="flex animate-marquee whitespace-nowrap items-center gap-8 pl-32">
                    {[...announcements, ...announcements].map((item, i) => (
                        <Link key={i} href={item.link} className="flex items-center gap-3 group">
                            {item.type === "New" && <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm animate-pulse">New</span>}
                            {item.type === "Result" && <span className="bg-green-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">Result</span>}

                            <span className="text-gray-300 text-sm font-medium group-hover:text-[var(--color-saffron)] transition-colors flex items-center gap-2">
                                {item.type === "Download" ? <FileText className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 text-[var(--color-gold)]" />}
                                {item.text}
                            </span>
                            <span className="text-white/20">|</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
