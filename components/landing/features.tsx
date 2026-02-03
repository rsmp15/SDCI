import { Shield, Brain, Target, Trophy, Users, Calculator, Medal } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "Experienced Guidance",
        description: "Led by an educator who has cleared NDA, CDS, AFCAT, SSR & Airman exams, with 7+ years of experience."
    },
    {
        icon: Brain,
        title: "Concept-Based Teaching",
        description: "Focus on logic and pattern recognition, not just rote memorization of formulas."
    },
    {
        icon: Target,
        title: "Specialized Prep",
        description: "Dedicated coaching strictly aligned with UPSC & Defence exam syllabus standards."
    },
    {
        icon: Trophy,
        title: "Proven Success",
        description: "Guided 300+ students with multiple selections and SSB recommendations."
    },
    {
        icon: Users,
        title: "Small Batches",
        description: "Limited batch strength ensuring individual doubt-solving and personal attention."
    },
    {
        icon: Calculator,
        title: "Strategy-Driven Maths",
        description: "Mathematics taught as a strategy subject, crucial for NDA & CDS aspirants."
    },
    {
        icon: Medal,
        title: "Discipline & Motivation",
        description: "Beyond academics: mentorship, exam temperament training, and officer-like mindset."
    },
]

export function Features() {
    return (
        <section className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-saffron)] font-bold tracking-wider uppercase text-sm">Why Choose SDCI</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-navy mt-2 mb-6">
                        Building Character, <br />
                        <span className="text-[var(--color-green)]">Creating Officers.</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We don't just teach syllabus; we inculcate the officer-like qualities (OLQs) required to serve the nation with pride.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-saffron)] transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-[var(--color-saffron)] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
