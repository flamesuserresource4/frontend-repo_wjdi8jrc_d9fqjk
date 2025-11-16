export default function CTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-neutral-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 sm:p-14 text-center">
          <h3 className="text-white text-3xl font-bold">Brew better mornings</h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">Subscribe and get fresh beans delivered monthly with exclusive recipes and first access to new drops.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="Enter your email" className="w-full sm:w-80 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50" />
            <button className="rounded-full bg-amber-500 text-black font-semibold px-6 py-3 hover:bg-amber-400 transition">Subscribe</button>
          </form>
          <p className="mt-3 text-xs text-white/50">Free shipping on your first bag. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
