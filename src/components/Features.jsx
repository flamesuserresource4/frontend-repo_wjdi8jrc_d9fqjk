import { Bean, CupSoda, Flame, Leaf, Thermometer, Timer } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: <Bean className="text-amber-400" size={22} />, title: 'Single-Origin Beans', desc: 'Sourced from small farms with traceable quality.' },
    { icon: <Flame className="text-amber-400" size={22} />, title: 'Precision Roast', desc: 'Profiled with data-driven heat curves for perfect balance.' },
    { icon: <Timer className="text-amber-400" size={22} />, title: 'Brew Guides', desc: 'Step-by-step recipes for pour-over, AeroPress, and more.' },
    { icon: <Leaf className="text-amber-400" size={22} />, title: 'Sustainable', desc: 'Packaging and sourcing with the planet in mind.' },
    { icon: <Thermometer className="text-amber-400" size={22} />, title: 'Freshness Locked', desc: 'Roasted weekly and sealed for optimal flavor.' },
    { icon: <CupSoda className="text-amber-400" size={22} />, title: 'Cafe Classics', desc: 'From espresso to cold brew—crafted to perfection.' },
  ]

  return (
    <section id="menu" className="relative bg-neutral-950 text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Retro Brew</h2>
          <p className="mt-2 text-white/70">Craft, science, and a pinch of nostalgia—designed for creators.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 ring-1 ring-amber-400/30">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
