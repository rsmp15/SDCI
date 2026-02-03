import { Hero } from "@/components/landing/hero"
import { Ticker } from "@/components/landing/ticker"
import { Features } from "@/components/landing/features"
import { About } from "@/components/landing/about"
import { Courses } from "@/components/landing/courses"
import { Results } from "@/components/landing/results"
import { Campus } from "@/components/landing/campus"
import { Life } from "@/components/landing/life"
import { Testimonials } from "@/components/landing/testimonials"
import { News } from "@/components/landing/news"
import { AdmissionCTA } from "@/components/landing/admission-cta"
import { Contact } from "@/components/landing/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      <Ticker />
      <Features />
      <About />
      <Courses />
      <Results />
      <Campus />
      <Life />
      <Testimonials />
      <News />
      <AdmissionCTA />
      <Contact />
    </main>
  )
}
