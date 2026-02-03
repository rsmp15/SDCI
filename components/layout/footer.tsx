import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Phone, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/paths"

export function Footer() {
    return (
        <footer className="bg-[#050f1e] text-gray-300 pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src={getAssetPath("/logo.jpg")}
                                alt="SDCI Logo"
                                width={60}
                                height={60}
                                className="w-14 h-14 object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Forging the next generation of officers for the Indian Armed Forces.
                            We provide premier coaching for NDA, CDS, AFCAT and SSB with a holistic approach
                            to personality development.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/groups/844644429927643/?ref=share&mibextid=KtfwRi" target="_blank" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-saffron)] hover:text-white flex items-center justify-center transition-all duration-300 group">
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </Link>
                            <Link href="https://www.instagram.com/sdcicareer?igsh=MWM2Yjlod2Exa2s2" target="_blank" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-saffron)] hover:text-white flex items-center justify-center transition-all duration-300 group">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </Link>
                            <Link href="https://youtube.com/@sdcicareer?si=gCKW7g9eCnCK2lVL" target="_blank" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-saffron)] hover:text-white flex items-center justify-center transition-all duration-300 group">
                                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-saffron)] rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['About Us', 'Our Courses', 'Success Stories', 'Campus Facilities', 'Faculty Team', 'Gallery', 'Admissions 2026'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Gallery' ? '/gallery' : '#'} className="text-sm hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
                                        <span className="h-1 w-1 bg-[var(--color-saffron)] rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Student Resources */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Resources
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-saffron)] rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Download Brochure', 'Model Question Papers', 'Previous Year Answer Keys', 'Entrance Test Syllabus', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Download Brochure' ? getAssetPath('/SDCI_pamphlet.jpeg') : '#'}
                                        target={item === 'Download Brochure' ? '_blank' : undefined}
                                        className="text-sm hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"
                                    >
                                        <span className="h-1 w-1 bg-[var(--color-saffron)] rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-saffron)] rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-1" />
                                <span className="text-sm text-gray-400">
                                    Flat No: SR No-18/1, 2/1/1, First Floor,
                                    <br />Above Pizza Hut, Kamal Park, Road No-08,
                                    <br />Near SH, Dhanori, Pune - 411015
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[var(--color-saffron)] shrink-0" />
                                <span className="text-sm text-gray-400">9572456393 | 9022826404</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[var(--color-saffron)] shrink-0" />
                                <span className="text-sm text-gray-400">sdcicareer@gmail.com</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                                Request Call Back
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Sudhanshu Defence Career Institute. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <span>Designed with discipline</span>
                    </div>
                    end
                </div>
            </div>
        </footer>
    )
}
