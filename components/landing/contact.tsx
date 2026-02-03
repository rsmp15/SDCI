import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <section className="py-24 bg-white" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-xl">
                    {/* Left: Map */}
                    <div className="relative h-[400px] lg:h-auto bg-gray-200">
                        <iframe
                            src="https://maps.google.com/maps?q=Sudhanshu+Defence+Career+Institute+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Academy Location"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <a
                            href="https://share.google/bn0m8iQ30htii4loJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer block group z-10"
                        >
                            <p className="font-bold text-navy text-sm flex items-center gap-1 group-hover:text-[var(--color-saffron)] transition-colors">
                                SDCI Campus <MapPin className="w-3 h-3" />
                            </p>
                            <p className="text-xs text-gray-500">Dhanori, Pune</p>
                        </a>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="p-8 lg:p-12">
                        <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block mb-6">Get In Touch</span>
                        <h2 className="font-heading text-4xl text-navy mb-6">
                            Visit Our <span className="text-[var(--color-green)]">Campus</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We invite parents and students to visit our campus and see the facilities firsthand.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Address</h4>
                                    <p className="text-gray-600 text-sm">Flat No: SR No-18/1, 2/1/1, First Floor, Above Pizza Hut, Kamal Park, Road No-08, Near SH, Dhanori, Pune - 411015</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Call Us</h4>
                                    <p className="text-gray-600 text-sm">9572456393 | 9022826404</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Email</h4>
                                    <p className="text-gray-600 text-sm">sdcicareer@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Office Hours</h4>
                                    <p className="text-gray-600 text-sm">Mon - Sat: 09:00 AM - 06:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="https://wa.me/919572456393" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
