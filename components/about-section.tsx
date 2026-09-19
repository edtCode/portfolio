import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="border-y-2 border-black bg-white px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm -rotate-2">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border-2 border-black bg-[#FFC224]" />
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-black bg-[#f6f3ee] p-5 shadow-[8px_8px_0_black]">
            <Image src="/images/studio-workspace.svg" alt="Illustration of a creative workspace" width={600} height={600} className="w-full" />
            <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest">Currently: learning in public</p>
          </div>
        </div>
        <div>
          <p className="mb-3 font-bold text-[#FF4A60]">01 / ABOUT</p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">A problem solver who likes to build.</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#393939]">
            <p>I am Shivam Sharma, a third-year B.Tech student in Information Technology at the National Institute of Technology, Raipur.</p>
            <p>I enjoy DSA, competitive programming, systems, and turning ideas into useful products. I have solved 800+ problems across platforms and participated in 60+ contests.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[['800+', 'problems solved'], ['60+', 'contests'], ['61', 'day streak']].map(([value, label]) => <div key={label} className="rounded-2xl border-2 border-black bg-[#f6f3ee] p-4"><strong className="text-3xl font-black">{value}</strong><span className="mt-1 block text-sm font-semibold leading-tight">{label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

 
