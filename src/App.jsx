import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Story from './components/Story'
import Reviews from './components/Reviews'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Story />
      <Reviews />
      <CTA />
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Retro Brew. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
