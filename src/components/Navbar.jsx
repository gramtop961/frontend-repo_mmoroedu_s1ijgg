import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';

export default function Navbar({ cartCount = 0, onShop }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="h-9 w-9 rounded-full bg-lime-400/20 ring-1 ring-lime-300/40 flex items-center justify-center">
            <Leaf className="h-5 w-5 text-lime-300" />
          </div>
          <span className="text-white font-semibold tracking-wide">Verdant</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={onShop} className="text-white/80 hover:text-white transition">Shop</button>
          <a href="#story" className="text-white/80 hover:text-white transition">Story</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
        </nav>
        <button
          className="relative inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 ring-1 ring-white/20 hover:bg-white/15 transition"
          onClick={onShop}
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 flex items-center justify-center rounded-full bg-lime-400 text-black text-xs font-semibold">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
