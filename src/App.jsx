import React, { useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

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
    <div className="min-h-screen bg-emerald-950 text-white">
      <Navbar cartCount={cartCount} onShop={scrollToProducts} />
      <main>
        <Hero onShop={scrollToProducts} />
        <Story />
        <div ref={productsRef}>
          <Products onAdd={handleAddToCart} />
        </div>
      </main>
      <Footer cartCount={cartCount} />
    </div>
  );
}
