import Image from "next/image"

export function ServicesSection() {
  const skills = [
    ["Languages", "C/C++, Python", "#FF6B7A"],
    ["Web", "HTML5, CSS, JavaScript, ReactJS, NodeJS", "#FFC224"],
    ["Databases", "PostgreSQL, Redis, Prisma", "#6366F1"],
    ["Core subjects", "OOPS, DBMS, Operating Systems", "#FFC224"],
    ["Tools", "Git, GitHub, TypeScript, Next.js, Express, Socket.IO", "#FF6B7A"],
    ["Strengths", "Problem solving, leadership, quizzing, designing", "#6366F1"],
  ]

  return (
    <section id="skills" className="bg-[#f6f3ee] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-[1fr_0.7fr]"><div><p className="mb-3 font-bold text-[#6366F1]">02 / SKILLS</p><h2 className="text-5xl font-black md:text-7xl">My toolkit.</h2></div><Image src="/images/product-design.svg" alt="Abstract product design illustration" width={400} height={240} className="hidden w-full md:block" /></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map(([title, detail, color]) => <div key={title} className="rounded-[1.5rem] border-2 border-black bg-white p-6 shadow-[6px_6px_0_black] transition-transform hover:-translate-y-1" style={{ borderTopColor: color }}><div className="mb-8 h-3 w-16 rounded-full" style={{ backgroundColor: color }} /><h3 className="mb-3 text-2xl font-black">{title}</h3><p className="leading-relaxed text-[#393939]">{detail}</p></div>)}</div>
      </div>
    </section>
  )
}

 
