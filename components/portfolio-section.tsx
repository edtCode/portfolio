import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Seatlock",
    tag: "Featured project",
    accent: "text-[#6366F1]",
    bg: "bg-[#6366F1]",
    href: "https://github.com/edtCode/Seatlock-engine",
    description: "A seat reservation and access-management engine designed for real-time booking, occupancy control, and conflict-safe allocation in high-demand sessions.",
    tags: ["TypeScript", "Node.js", "Redis", "PostgreSQL", "Real-time"],
    imageAlt: "Abstract interface illustration for Seatlock",
    imageSrc: "/images/ui-ux-design.svg",
  },
  {
    name: "Sentinel Auth",
    tag: "Systems project",
    accent: "text-[#FF6B35]",
    bg: "bg-[#FF6B35]",
    href: "https://github.com/edtCode/Sentinel-Auth",
    description: "Production-grade authentication and authorization service focused on secure identity checks, permission control, and scalable access workflows.",
    tags: ["Auth", "Node.js", "TypeScript", "JWT", "Redis", "Security"],
    imageAlt: "Abstract systems illustration for Sentinel Auth",
    imageSrc: "/images/motion-graphics.svg",
  },
  {
    name: "Distributed Rate Limiter",
    tag: "System design",
    accent: "text-[#0F766E]",
    bg: "bg-[#0F766E]",
    href: "https://github.com/edtCode/rate-limiter",
    description: "A production-oriented distributed API limiter built for fixed-window and sliding-window protections with Redis-backed throttling and observability.",
    tags: ["Node.js", "Redis", "Rate limiting", "System design", "APIs"],
    imageAlt: "Abstract systems illustration for distributed rate limiter",
    imageSrc: "/images/motion-graphics.svg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#FFC224] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 font-bold">03 / PROJECT</p><h2 className="text-5xl font-black md:text-7xl">Things I build.</h2></div><span className="hidden rounded-full border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold md:block">03 / 03</span></div>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="group grid overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[10px_10px_0_black] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_black]">
              <div className={`flex items-center justify-center ${project.bg} p-8`}><Image src={project.imageSrc} alt={project.imageAlt} width={700} height={700} className="w-full max-w-sm" /></div>
              <div className="p-8"><p className={`font-mono text-sm font-bold uppercase tracking-widest ${project.accent}`}>{project.tag}</p><div className="mt-3 flex items-start justify-between gap-5"><h3 className="text-4xl font-black">{project.name}</h3><ArrowUpRight className="h-7 w-7 shrink-0" /></div><p className="mt-5 leading-relaxed text-[#393939]">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white">{tag}</span>)}</div></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

 
