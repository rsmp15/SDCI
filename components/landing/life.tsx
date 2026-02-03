import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Map } from "lucide-react"

const dailyRoutine = [
    { time: "05:00 AM", activity: "Wake Up & PT", icon: "🏃‍♂️" },
    { time: "08:30 AM", activity: "Academy Classes", icon: "📚" },
    { time: "02:00 PM", activity: "Lunch & Rest", icon: "🥗" },
    { time: "04:30 PM", activity: "Games / Obstacles", icon: "⚽" },
    { time: "07:30 PM", activity: "Study Hours", icon: "📖" },
    { time: "10:30 PM", activity: "Lights Out", icon: "🛌" },
]

export function Life() {
    return (
        <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden text-white" id="life">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595182855113-64ecfcd1c784?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="animate-slide-in-left">
                        <span className="text-[var(--color-gold)] font-bold tracking-wider uppercase text-sm mb-2 block">
                            Student Life
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
                            More Than Just <br />
                            A <span className="text-[var(--color-saffron)]">Coaching Institute</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            At SDCI, we don't just prepare you for exams; we prepare you for life in the forces.
                            From early morning drills to late-night study sessions, every moment is crafted to instill discipline,
                            camaraderie, and leadership.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 rounded-lg bg-[var(--color-green)] text-white">
                                    <Map className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Outdoor Camps & Treks</h4>
                                    <p className="text-gray-400 text-sm mt-1">Regular weekend treks to forts and nature camps to build stamina and team spirit.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 rounded-lg bg-[var(--color-saffron)] text-white">
                                    <CalendarDays className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Events & Celebrations</h4>
                                    <p className="text-gray-400 text-sm mt-1">Celebrating festivals, Republic Day, and Kargil Vijay Diwas with full patriotic fervor.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Routine Timeline */}
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative">
                        <div className="absolute top-0 right-0 p-4 bg-[var(--color-gold)] rounded-bl-3xl text-[var(--color-navy)] font-bold text-sm">
                            Cadet Routine
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-[var(--color-saffron)]" />
                            A Day in The Life
                        </h3>

                        <div className="relative border-l-2 border-white/10 ml-3 space-y-8">
                            {dailyRoutine.map((item, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--color-navy)] border-2 border-[var(--color-saffron)]" />
                                    <div className="flex items-center justify-between group">
                                        <div>
                                            <p className="text-[var(--color-gold)] text-sm font-bg-mono font-bold">{item.time}</p>
                                            <h5 className="text-lg font-bold text-white mt-1 group-hover:text-[var(--color-saffron)] transition-colors">{item.activity}</h5>
                                        </div>
                                        <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
