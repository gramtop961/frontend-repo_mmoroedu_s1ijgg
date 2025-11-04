import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onShop }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);
  const fogOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.45]);

  return (
    <section ref={containerRef} className="relative min-h-[120svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6mI0F5J9a-hero-sample/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient wash that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      {/* Cinematic Vignette */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: vignetteOpacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_95%)]" />
      </motion.div>

      {/* Volumetric fog layers */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: fogOpacity }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')] bg-cover mix-blend-screen opacity-20" />
      </motion.div>

      {/* GTA6-style title block */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-40 sm:pt-48 md:pt-56"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Elevate your tea ritual
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-lg sm:text-xl text-white/80"
        >
          Handpicked leaves. Cinematic flavor arcs. A world of aroma in every cup.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShop}
            className="inline-flex items-center justify-center rounded-full bg-lime-400 text-black font-semibold px-6 py-3 shadow-[0_10px_30px_-10px_rgba(190,242,100,0.7)] hover:bg-lime-300 transition"
          >
            Shop the Collection
          </motion.button>
          <motion.a
            whileHover={{ x: 4 }}
            href="#story"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 ring-1 ring-white/20 text-white/90 hover:text-white hover:ring-white/40"
          >
            Discover the Story →
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom marquee callout */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10">
        <div className="relative h-20 overflow-hidden">
          <motion.div
            className="absolute whitespace-nowrap will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="mx-6 text-white/60 tracking-widest text-sm">
                ORGANIC • SMALL BATCH • DIRECT TRADE • HANDCRAFTED • 
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
