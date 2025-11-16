export default function Story() {
  return (
    <section id="story" className="relative bg-neutral-950 text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p className="mt-3 text-white/70">
              Born in a tiny studio lit by an orange desk lamp and a humming monitor,
              we began roasting beans between late-night coding sessions. The goal? A cup that fuels creativity.
            </p>
            <p className="mt-3 text-white/70">
              We partner with farmers, obsess over roast curves, and design every blend to taste amazing straight or with milk.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/20 to-emerald-500/10 p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between"><span>Founded</span><span className="text-white/80">2021</span></li>
              <li className="flex items-center justify-between"><span>Bags roasted</span><span className="text-white/80">50,000+</span></li>
              <li className="flex items-center justify-between"><span>Avg. roast/week</span><span className="text-white/80">3</span></li>
              <li className="flex items-center justify-between"><span>Community rating</span><span className="text-amber-400 font-semibold">4.9/5</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
