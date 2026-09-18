import Image from "next/image"
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f6f3ee] px-4 pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#FFC224] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#6366F1] blur-3xl opacity-20" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold">B.Tech IT · NIT Raipur · 3rd year</p>
          <h1 className="max-w-3xl text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-9xl">Shivam<br /><span className="text-[#6366F1]">Sharma.</span></h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#393939] md:text-2xl">I solve hard problems, build useful products, and keep learning how the pieces fit together.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:noshivam19@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1"><Mail className="h-5 w-5" /> Get in touch</a>
            <a href="https://github.com" className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-6 py-4 font-bold transition-transform hover:-translate-y-1"><Github className="h-5 w-5" /> GitHub</a>
            <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-6 py-4 font-bold transition-transform hover:-translate-y-1"><Linkedin className="h-5 w-5" /> LinkedIn</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md rotate-2">
          <div className="absolute -inset-3 -rotate-3 rounded-[2rem] border-2 border-black bg-[#FF6B7A]" />
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-black bg-white p-3 shadow-[10px_10px_0_black]">
            <Image src="/images/about-me.svg" alt="Abstract portrait illustration for Shivam Sharma" width={640} height={640} className="h-auto w-full rounded-2xl" priority />
            <div className="flex items-center justify-between px-3 pb-2 pt-4 text-sm font-bold"><span>DSA × BUILD × LEARN</span><ArrowDownRight className="h-5 w-5" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

 
