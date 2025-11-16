import { useState } from 'react'
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#story', label: 'Our Story' },
    { href: '#brews', label: 'Brews' },
    { href: '#reviews', label: 'Reviews' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/30 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between p-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/30">
                <Coffee size={18} />
              </span>
              <span className="text-white font-semibold tracking-tight">Retro Brew</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-black font-semibold px-4 py-2 shadow shadow-amber-500/30 hover:bg-amber-400 transition">
                <ShoppingBag size={16} /> Order
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                    {l.label}
                  </a>
                ))}
                <a href="#order" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-black font-semibold px-4 py-2 shadow shadow-amber-500/30">
                  <ShoppingBag size={16} /> Order
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
