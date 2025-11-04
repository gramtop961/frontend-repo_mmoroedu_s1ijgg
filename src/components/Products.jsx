import React from 'react';
import { motion } from 'framer-motion';

const TEAS = [
  { id: 'sencha', name: 'Mount Sencha', price: 16, image: 'https://images.unsplash.com/photo-1707818211919-b6e198a94635?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3VudCUyMFNlbmNoYXxlbnwwfDB8fHwxNzYyMjU1NjYxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'oolong', name: 'Amber Oolong', price: 18, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'matcha', name: 'Ceremonial Matcha', price: 22, image: 'https://images.unsplash.com/photo-1707818211919-b6e198a94635?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3VudCUyMFNlbmNoYXxlbnwwfDB8fHwxNzYyMjU1NjYxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'chai', name: 'Cardamom Chai', price: 15, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop' },
];

export default function Products({ onAdd }) {
  return (
    <section id="shop" className="relative bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Shop the Collection</h2>
            <p className="text-white/70 mt-1">Curated essentials for every ritual.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAS.map((t) => (
            <motion.div key={t.id} whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <span className="text-lime-300 font-medium">${t.price}</span>
                </div>
                <button
                  onClick={() => onAdd && onAdd(t)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white text-black font-medium px-4 py-2 hover:bg-lime-400 transition"
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
