import { ShoppingCart, Leaf, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Leaf size={18} />
            </div>
            <span className="font-semibold tracking-tight">Verdant Tea Co.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#products" className="hover:text-emerald-700 transition-colors">Shop</a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative rounded-full p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            <a href="#products" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-emerald-50">Shop</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-emerald-50">About</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-emerald-50">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
