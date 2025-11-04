import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onShop }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  // Scroll-linked transforms for a cinematic, innovative feel
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.7]);
  const fogOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const sceneRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '-2deg']);
  const hue = useTransform(scrollYProgress, [0, 1], ['hue-rotate(0deg)', 'hue-rotate(25deg)']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(2px)']);

  return (
    <section ref={containerRef} className="relative min-h-[130svh] w-full overflow-hidden bg-black">
      {/* 3D Scene with slight cinematic dolly/tilt on scroll */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: sceneScale, rotate: sceneRotate, filter: hue }}
      >
        <Spline
          scene="https://prod.spline.design/z3DRq211g66TkBow/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Soft gradient wash that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      {/* Beams/glow accents for extra atmosphere */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
        <div className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_50%_30%,rgba(56,189,248,0.08),transparent_30%,rgba(168,85,247,0.07),transparent_70%)]" />
      </div>

      {/* Cinematic Vignette */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: vignetteOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,black_98%)]" />
      </motion.div>

      {/* Volumetric fog + subtle aberration layer */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: fogOpacity, filter: blur }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?q=80&w=1600&auto=format&fit=crop')] bg-cover mix-blend-screen opacity-20" />
      </motion.div>

      {/* Title & CTAs with parallax drift */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-40 sm:pt-48 md:pt-56"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 text-xs text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
          Immersive brew experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Liquid Portals. Pure Focus.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-lg sm:text-xl text-white/85"
        >
          A futuristic tea ritual—vibrant, hypnotic, and crafted for deep flow.
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

      {/* Bottom marquee with dual lanes for kinetic feel */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10">
        <div className="relative h-24 overflow-hidden">
          <motion.div
            className="absolute whitespace-nowrap will-change-transform text-white/70"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`m1-${i}`} className="mx-6 tracking-widest text-sm">
                ORGANIC • SMALL BATCH • DIRECT TRADE • HANDCRAFTED •
              </span>
            ))}
          </motion.div>
          <motion.div
            className="absolute whitespace-nowrap will-change-transform text-white/40 top-8"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 36, ease: 'linear' }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`m2-${i}`} className="mx-6 tracking-widest text-sm">
                CEREMONIAL • LIMITED RELEASE • SINGLE ORIGIN • RARE LEAVES •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
