import React from 'react';
import { motion } from 'framer-motion';

const TEAS = [
  { id: 'sencha', name: 'Mount Sencha', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop' },
  { id: 'oolong', name: 'Amber Oolong', price: 18, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop' },
  { id: 'matcha', name: 'Ceremonial Matcha', price: 22, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop' },
  { id: 'chai', name: 'Cardamom Chai', price: 15, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1400&auto=format&fit=crop' },
];

export default function Products({ onAdd }) {
  return (
    <section id="shop" className="relative bg-emerald-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-50">Shop the Collection</h2>
            <p className="text-emerald-100/80 mt-1">Curated essentials for every ritual.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAS.map((t) => (
            <motion.div key={t.id} whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden bg-emerald-900/40 ring-1 ring-emerald-400/20">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-emerald-50 font-semibold">{t.name}</h3>
                  <span className="text-emerald-300 font-medium">${t.price}</span>
                </div>
                <button
                  onClick={() => onAdd && onAdd(t)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-300 text-emerald-950 font-medium px-4 py-2 hover:bg-emerald-200 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
