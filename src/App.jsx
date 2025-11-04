import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 'sencha',
      name: 'Japanese Sencha',
      price: 14.99,
      category: 'green',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1541354329998-f4d8a9a3d5c9?q=80&w=1200&auto=format&fit=crop',
      description: 'Vibrant, grassy notes with a clean, refreshing finish.',
    },
    {
      id: 'matcha',
      name: 'Ceremonial Matcha',
      price: 24.5,
      category: 'green',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
      description: 'Stone-ground, umami-rich powder for mindful moments.',
    },
    {
      id: 'earl-grey',
      name: 'Earl Grey Supreme',
      price: 12.0,
      category: 'black',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      description: 'Bright bergamot aroma over a brisk black tea base.',
    },
    {
      id: 'masala-chai',
      name: 'Masala Chai Blend',
      price: 13.5,
      category: 'black',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1200&auto=format&fit=crop',
      description: 'Comforting spices: cardamom, ginger, cinnamon, clove.',
    },
    {
      id: 'chamomile',
      name: 'Egyptian Chamomile',
      price: 9.5,
      category: 'herbal',
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1200&auto=format&fit=crop',
      description: 'Apple-sweet and soothing, perfect for nighttime.',
    },
    {
      id: 'peppermint',
      name: 'Peppermint Leaves',
      price: 8.99,
      category: 'herbal',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop',
      description: 'Cooling menthol burst with a crisp, clean aroma.',
    },
  ];

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' ? true : p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQuery = (value) => setQuery(value);
  const updateCategory = (value) => setCategory(value);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800">
      <Navbar cartCount={cartCount} />
      <Hero onShopNow={() => {
        const el = document.getElementById('products');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <main id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Products
          products={filtered}
          onAddToCart={addToCart}
          query={query}
          onQueryChange={updateQuery}
          category={category}
          onCategoryChange={updateCategory}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
