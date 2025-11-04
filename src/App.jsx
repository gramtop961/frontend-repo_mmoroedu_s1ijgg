import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Products from './components/Products.jsx';

export default function App() {
  const [cart, setCart] = useState([]);
  const productsRef = useRef(null);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + (item.qty || 1), 0), [cart]);

  const handleAddToCart = (tea) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === tea.id);
      if (existing) {
        return prev.map((p) => (p.id === tea.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...tea, qty: 1 }];
    });
  };

  const scrollToProducts = () => {
    const el = document.getElementById('shop');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar cartCount={cartCount} onShop={scrollToProducts} />
      <main>
        <Hero onShop={scrollToProducts} />
        <Story />
        <div ref={productsRef}>
          <Products onAdd={handleAddToCart} />
        </div>
      </main>
      <footer id="about" className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Verdant Tea. All rights reserved.</p>
          <AnimatePresence>
            {cartCount > 0 && (
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                {cartCount} item{cartCount > 1 ? 's' : ''} in cart
              </div>
            )}
          </AnimatePresence>
        </div>
      </footer>
    </div>
  );
}
