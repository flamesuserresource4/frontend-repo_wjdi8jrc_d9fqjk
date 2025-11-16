export default function Menu() {
  const coffees = [
    { name: 'Espresso', desc: 'Rich, syrupy, intense.', price: 3.5 },
    { name: 'Americano', desc: 'Espresso + hot water.', price: 4 },
    { name: 'Cappuccino', desc: 'Foamy, balanced, cozy.', price: 4.5 },
    { name: 'Latte', desc: 'Silky milk, smooth shot.', price: 5 },
    { name: 'Mocha', desc: 'Chocolate meets espresso.', price: 5.5 },
    { name: 'Cold Brew', desc: 'Slow-steeped and smooth.', price: 4.75 },
  ]

  return (
    <section id="brews" className="bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Signature Menu</h2>
          <p className="mt-2 text-white/70">Our most-loved classics and modern brews.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{c.name}</h3>
                <span className="text-amber-400 font-semibold">${c.price.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <button className="mt-4 w-full rounded-full bg-amber-500 text-black font-semibold px-4 py-2 hover:bg-amber-400 transition">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
