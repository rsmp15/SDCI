import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const facilities = [
    { name: "GTO Ground", image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", col: "col-span-1 md:col-span-2 row-span-2" },
    { name: "Smart Classrooms", image: "https://images.unsplash.com/photo-1599689035272-9a0082f4236a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", col: "col-span-1 row-span-1" },
    { name: "Drill Square", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", col: "col-span-1 row-span-1" },
    { name: "Hostels", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", col: "col-span-1 row-span-1" },
    { name: "Computer Lab", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", col: "col-span-1 row-span-1" },
]

export function Campus() {
    return (
        <section className="py-24 bg-gray-50" id="campus">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
                    <div>
                        <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block">
                            Infrastructure
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
                            World Class <span className="text-[var(--color-green)]">Campus</span>
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-xl">
                            A self-contained residential campus designed to foster focus, fitness, and camaraderie.
                            Everything a defence aspirant needs, right within reach.
                        </p>
                    </div>
                    <div className="flex justify-start lg:justify-end">
                        <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90 text-white flex items-center gap-2">
                            <PlayCircle className="w-5 h-5" />
                            Take a Virtual Tour
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {facilities.map((fac, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-2xl group ${fac.col}`}>
                            <div className="absolute inset-0 bg-gray-900" style={{ backgroundImage: `url(${fac.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl md:text-2xl font-bold">{fac.name}</h3>
                                <div className="h-1 w-12 bg-[var(--color-saffron)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
