import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#FFC224] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 font-bold">03 / PROJECT</p><h2 className="text-5xl font-black md:text-7xl">Things I build.</h2></div><span className="hidden rounded-full border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold md:block">01 / 01</span></div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="grid overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[10px_10px_0_black]">
            <div className="flex items-center justify-center bg-[#6366F1] p-8"><Image src="/images/ui-ux-design.svg" alt="Abstract interface illustration for Seatlock" width={700} height={700} className="w-full max-w-sm" /></div>
            <div className="p-8"><p className="font-mono text-sm font-bold uppercase tracking-widest text-[#6366F1]">Featured project</p><div className="mt-3 flex items-start justify-between gap-5"><h3 className="text-4xl font-black">Seatlock</h3><ArrowUpRight className="h-7 w-7 shrink-0" /></div><p className="mt-5 leading-relaxed text-[#393939]">A seat reservation and access-management engine designed for real-time booking, occupancy control, and conflict-safe allocation in high-demand sessions.</p><div className="mt-6 flex flex-wrap gap-2">{['TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Real-time'].map(tag => <span key={tag} className="rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white">{tag}</span>)}</div></div>
          </article>
          <article className="grid overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[10px_10px_0_black]">
            <div className="flex items-center justify-center bg-[#FF6B35] p-8"><Image src="/images/motion-graphics.svg" alt="Abstract systems illustration for Sentinel Auth" width={700} height={700} className="w-full max-w-sm" /></div>
            <div className="p-8"><p className="font-mono text-sm font-bold uppercase tracking-widest text-[#FF6B35]">Systems project</p><div className="mt-3 flex items-start justify-between gap-5"><h3 className="text-4xl font-black">Sentinel Auth</h3><ArrowUpRight className="h-7 w-7 shrink-0" /></div><p className="mt-5 leading-relaxed text-[#393939]">Production-grade authentication and authorization service focused on secure identity checks, permission control, and scalable access workflows.</p><div className="mt-6 flex flex-wrap gap-2">{['Auth', 'Node.js', 'TypeScript', 'JWT', 'Redis', 'Security'].map(tag => <span key={tag} className="rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white">{tag}</span>)}</div></div>
          </article>
        </div>
      </div>
    </section>
  )
}

 
