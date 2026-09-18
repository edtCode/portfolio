import Image from "next/image"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-black px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl"><div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 font-bold text-[#FFC224]">04 / EXPERIENCE & ACHIEVEMENTS</p><h2 className="text-5xl font-black md:text-7xl">Proof of work.</h2></div><Image src="/images/get-in-touch.svg" alt="Abstract communication illustration" width={260} height={180} className="hidden w-52 md:block" /></div>
        <div className="grid gap-6 md:grid-cols-2"><article className="rounded-[1.5rem] border-2 border-[#6366F1] bg-white p-7 text-black shadow-[7px_7px_0_#6366F1]"><p className="font-bold text-[#6366F1]">11 Jan 2026 — 25 Feb 2026</p><h3 className="mt-3 text-2xl font-black">Frontend Developer Intern</h3><p className="mt-1 font-bold">CurateMe Marketing Agency</p><p className="mt-4 leading-relaxed">Built responsive React and Tailwind interfaces, reusable components, REST API integrations, and client-side state management.</p></article><article className="rounded-[1.5rem] border-2 border-[#FF6B7A] bg-white p-7 text-black shadow-[7px_7px_0_#FF6B7A]"><p className="font-bold text-[#FF4A60]">2024 — Present</p><h3 className="mt-3 text-2xl font-black">Community & leadership</h3><p className="mt-4 leading-relaxed">Executive at DRR and NSS, NIT Raipur — creating awareness content, supporting volunteer initiatives, and contributing to campus communities.</p></article></div>
        <div className="mt-6 rounded-[1.5rem] border-2 border-white p-7"><h3 className="mb-7 text-2xl font-black">Competitive programming</h3><div className="grid grid-cols-2 gap-6 md:grid-cols-4">{[['1410', 'CodeChef'], ['1550', 'LeetCode'], ['1006', 'Codeforces'], ['32+', 'Badges']].map(([value, label]) => <div key={label}><strong className="block text-4xl font-black text-[#FFC224]">{value}</strong><span className="text-gray-300">{label} max / earned</span></div>)}</div><p className="mt-7 leading-relaxed text-gray-300">Ninja Dominator on Coding Ninjas · 1,250+ submissions · global rank 9,830 on Codolio.</p></div></div>
    </section>
  )
}

 
