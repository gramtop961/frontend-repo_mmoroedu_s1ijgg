import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onShop }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  // Nature-forward, gentle scroll choreography
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const mistOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.45]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const hue = useTransform(scrollYProgress, [0, 1], ['hue-rotate(0deg)', 'hue-rotate(-10deg)']);

  return (
    <section ref={containerRef} className="relative min-h-[120svh] w-full overflow-hidden bg-emerald-950">
      {/* Layered nature gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, filter: hue }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,#052e1d,transparent),radial-gradient(800px_500px_at_80%_10%,#064e3b22,transparent),linear-gradient(to_bottom,#052e1d, #031a12)]" />
        {/* Subtle leaf silhouettes */}
        <svg className="absolute inset-0 opacity-[0.12]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id="leaf" x1="0" x2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, i) => (
            <g key={i} transform={`translate(${(i * 43) % 820}, ${(i * 71) % 620}) rotate(${(i * 37) % 360})`}>
              <path d="M0 0 C 20 -50, 60 -50, 80 0 C 60 20, 20 20, 0 0 Z" fill="url(#leaf)" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Morning light wash that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(16,185,129,0.18),transparent_70%)]" />

      {/* Low-lying mist */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: mistOpacity }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover mix-blend-screen opacity-25" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-36 sm:pt-44 md:pt-52"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-3 py-1 ring-1 ring-emerald-500/30 text-xs text-emerald-100 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          From leaf to light
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-emerald-50"
        >
          Brewed by nature
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-lg sm:text-xl text-emerald-100/90"
        >
          Calm mornings, misty fields, living flavor. Tea that carries the forest into your cup.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShop}
            className="inline-flex items-center justify-center rounded-full bg-emerald-300 text-emerald-950 font-semibold px-6 py-3 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.55)] hover:bg-emerald-200 transition"
          >
            Shop the teas
          </motion.button>
          <motion.a
            whileHover={{ x: 4 }}
            href="#story"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 ring-1 ring-emerald-300/40 text-emerald-100 hover:text-white hover:ring-emerald-200/60"
          >
            Our origins →
          </motion.a>
        </div>
      </motion.div>

      {/* Gentle marquee of plant notes */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10">
        <div className="relative h-20 overflow-hidden">
          <motion.div
            className="absolute whitespace-nowrap will-change-transform text-emerald-200/80"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={`m1-${i}`} className="mx-6 tracking-widest text-sm">
                MOUNTAIN MIST • SPRING PICK • SHADE GROWN • HAND ROLLED •
              </span>
            ))}
          </motion.div>
          <motion.div
            className="absolute whitespace-nowrap will-change-transform text-emerald-200/50 top-8"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={`m2-${i}`} className="mx-6 tracking-widest text-sm">
                CEREMONIAL • SINGLE ORIGIN • WILD FORAGED • SMALL BATCH •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
