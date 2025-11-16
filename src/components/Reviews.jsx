import { Star } from 'lucide-react'

const ReviewCard = ({ name, text }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
      ))}
    </div>
    <p className="mt-3 text-white/80">“{text}”</p>
    <p className="mt-3 text-sm text-white/60">— {name}</p>
  </div>
)

export default function Reviews() {
  const reviews = [
    { name: 'Ava', text: 'Taste and vibe are unmatched. My go-to pour-over fuel.' },
    { name: 'Noah', text: 'The espresso blend hits like a creative spark—balanced and bold.' },
    { name: 'Mia', text: 'Love the guides. My AeroPress game leveled up fast.' },
  ]

  return (
    <section id="reviews" className="bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by makers</h2>
          <p className="mt-2 text-white/70">Real words from the community.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
