import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,179,71,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.1),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Coffee for makers, dreamers, and night owls
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Hand-roasted beans with a retro-tech vibe. Smooth, bold, and engineered to fuel your best ideas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#order" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-black font-semibold px-6 py-3 shadow shadow-amber-500/30 hover:bg-amber-400 transition pointer-events-auto">
              Shop Blends <ArrowRight size={18} />
            </a>
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white font-semibold px-6 py-3 hover:bg-white/20 transition pointer-events-auto">
              Explore Menu
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <span>Freshly roasted weekly</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Ethically sourced</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Free shipping over $35</span>
          </div>
        </div>
      </div>
    </section>
  )
}
