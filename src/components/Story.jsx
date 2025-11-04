import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const opacityIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="story" ref={ref} className="relative bg-black text-white">
      {/* Progress rail on the left for a novel scroll affordance */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-white/5">
        <motion.div className="absolute left-0 top-0 w-1.5 bg-lime-400" style={{ height: progressHeight }} />
      </div>

      {/* Parallax backdrop */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32 space-y-28">
        <motion.div style={{ opacity: opacityIn }} className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">From mountain mist to your mug</h2>
          <p className="text-white/80 max-w-2xl">
            Follow the leaves on a journey—picked at sunrise, roasted by artisans, infused by you.
          </p>
        </motion.div>

        {/* Split story blocks */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop" alt="Tea roasting" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold">Artisanal heat, precise timing</h3>
            <p className="text-white/75">We roast in micro-batches to lock in layered flavor and a cinematic finish.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center md:[&>div:nth-child(1)]:order-2">
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1580001484819-1f504c5da0d2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWElMjBmaWVsZHMlMjBhdCUyMGRhd258ZW58MHwwfHx8MTc2MjI1NTY2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tea fields at dawn" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold">Origins you can taste</h3>
            <p className="text-white/75">Direct trade partnerships let terroir speak—from misty peaks to coastal valleys.</p>
          </motion.div>
        </div>

        {/* Sticky specs panel for innovative scroll behavior */}
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:sticky md:top-24 self-start">
              <div className="rounded-2xl ring-1 ring-white/10 p-8 bg-white/5 backdrop-blur">
                <h3 className="text-2xl font-semibold">Brew with intention</h3>
                <p className="text-white/75 mt-2">Temperature, timing, vessel—craft the perfect scene in every steep.</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { t: 'Precision Heat', d: '90–95°C water unlocks sweetness without bitterness.' },
                { t: 'Timed Infusions', d: 'Short steeps layer flavor like cinematic chapters.' },
                { t: 'Mindful Vessels', d: 'Porcelain for purity, clay for warmth—choose your texture.' },
              ].map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-2xl ring-1 ring-white/10 p-6 bg-white/5 backdrop-blur"
                >
                  <div className="text-sm text-white/60">0{i + 1}</div>
                  <div className="mt-1 text-xl font-medium">{s.t}</div>
                  <p className="mt-1 text-white/75">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="rounded-2xl ring-1 ring-white/10 p-8 bg-white/5 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to taste the future?</h3>
              <p className="text-white/75 mt-1">Experience hypnotic clarity in every cup.</p>
            </div>
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-lime-400 text-black font-semibold px-6 py-3 hover:bg-lime-300 transition">Explore blends</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
