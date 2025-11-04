import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const opacityIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="story" ref={ref} className="relative bg-emerald-950 text-emerald-50">
      {/* Left progress rail */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-emerald-200/10">
        <motion.div className="absolute left-0 top-0 w-1.5 bg-emerald-400" style={{ height: progressHeight }} />
      </div>

      {/* Parallax backdrop: forest canopy */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-25"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/60 to-emerald-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32 space-y-28">
        <motion.div style={{ opacity: opacityIn }} className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">From mountain mist to your mug</h2>
          <p className="text-emerald-100/90 max-w-2xl">
            Follow the leaves on a gentle journey—picked at sunrise, rested by wind, warmed by hands.
          </p>
        </motion.div>

        {/* Split story blocks */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-emerald-300/20">
            <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop" alt="Tea roasting" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold">Artisanal heat, precise timing</h3>
            <p className="text-emerald-100/85">We roast in micro-batches to let sweetness bloom without edge.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center md:[&>div:nth-child(1)]:order-2">
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-emerald-300/20">
            <img src="https://images.unsplash.com/photo-1580001484819-1f504c5da0d2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWElMjBmaWVsZHMlMjBhdCUyMGRhd258ZW58MHwwfHx8MTc2MjI1NTY2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tea fields at dawn" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold">Origins you can taste</h3>
            <p className="text-emerald-100/85">Direct trade lets terroir speak—from misty peaks to coastal valleys.</p>
          </motion.div>
        </div>

        {/* Sticky specs panel */}
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:sticky md:top-24 self-start">
              <div className="rounded-2xl ring-1 ring-emerald-300/20 p-8 bg-emerald-900/40 backdrop-blur">
                <h3 className="text-2xl font-semibold">Brew with intention</h3>
                <p className="text-emerald-100/85 mt-2">Temperature, timing, vessel—let the leaf lead.</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { t: 'Gentle Heat', d: '90–95°C water unlocks sweetness without bitterness.' },
                { t: 'Timed Infusions', d: 'Short steeps layer flavor like unfolding leaves.' },
                { t: 'Mindful Vessels', d: 'Porcelain for purity, clay for warmth—choose your texture.' },
              ].map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-2xl ring-1 ring-emerald-300/20 p-6 bg-emerald-900/40 backdrop-blur"
                >
                  <div className="text-sm text-emerald-200/80">0{i + 1}</div>
                  <div className="mt-1 text-xl font-medium">{s.t}</div>
                  <p className="mt-1 text-emerald-100/85">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="rounded-2xl ring-1 ring-emerald-300/20 p-8 bg-emerald-900/40 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to slow down?</h3>
              <p className="text-emerald-100/85 mt-1">Steep a cup of quiet and clarity.</p>
            </div>
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-emerald-300 text-emerald-950 font-semibold px-6 py-3 hover:bg-emerald-200 transition">Explore blends</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
