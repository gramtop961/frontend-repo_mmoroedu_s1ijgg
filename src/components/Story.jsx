import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function CinematicIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  const words = ['Sunrise', 'Steam', 'City Rhythm', 'Slow Craft'];

  return (
    <section ref={ref} className="relative min-h-[120vh] overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.14),_transparent_60%)]" />
      <motion.div style={{ scale, opacity }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="space-y-6">
          {words.map((w, i) => (
            <motion.h2
              key={w}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-balance text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900"
            >
              {w}
            </motion.h2>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-lg text-slate-600"
          >
            Dawn pours over the city. Kettles whisper. We craft bold blends for bright mornings and neon nights — a little cinematic ritual for every day.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative overflow-hidden bg-emerald-600 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        className="flex whitespace-nowrap py-4 text-2xl font-semibold tracking-tight"
      >
        <span className="mx-8">Handpicked • Small Batch • Cold-Brew Ready • Zero Plastic • Direct Trade • </span>
        <span className="mx-8">Handpicked • Small Batch • Cold-Brew Ready • Zero Plastic • Direct Trade • </span>
        <span className="mx-8">Handpicked • Small Batch • Cold-Brew Ready • Zero Plastic • Direct Trade • </span>
      </motion.div>
    </div>
  );
}

function SplitShowcase() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftScroll = useScroll({ target: leftRef, offset: ['start end', 'end start'] }).scrollYProgress;
  const rightScroll = useScroll({ target: rightRef, offset: ['start end', 'end start'] }).scrollYProgress;

  const yLeft = useTransform(leftScroll, [0, 1], [40, -40]);
  const yRight = useTransform(rightScroll, [0, 1], [-40, 40]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid items-stretch gap-8 md:grid-cols-2">
        <motion.div ref={leftRef} style={{ y: yLeft }} className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop"
            alt="Morning pour over"
            className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900">Mornings, made golden</h3>
            <p className="mt-2 text-slate-600">Bright citrus, garden greens, and a soft floral finish. Our sunrise blends spark focus without the crash.</p>
          </div>
        </motion.div>

        <motion.div ref={rightRef} style={{ y: yRight }} className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop"
            alt="Night time iced glass"
            className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900">Nights, turned neon</h3>
            <p className="mt-2 text-slate-600">Spiced chai and bergamot notes glide over ice. Slow sips, bright lights, easy company.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StickySpecs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const op1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <section ref={ref} className="relative">
      <div className="sticky top-16 z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50">
          <div className="grid gap-8 p-10 md:grid-cols-3">
            <motion.div style={{ opacity: op1 }} className="space-y-2">
              <h4 className="text-lg font-semibold text-emerald-700">Direct Trade</h4>
              <p className="text-slate-600">We partner closely with small farms for traceable, ethical sourcing that pays growers fairly.</p>
            </motion.div>
            <motion.div style={{ opacity: op2 }} className="space-y-2">
              <h4 className="text-lg font-semibold text-emerald-700">Freshness Locked</h4>
              <p className="text-slate-600">Nitrogen-flushed pouches and plastic-free tins preserve aroma and complexity without waste.</p>
            </motion.div>
            <motion.div style={{ opacity: op3 }} className="space-y-2">
              <h4 className="text-lg font-semibold text-emerald-700">Brew Your Way</h4>
              <p className="text-slate-600">Hot, iced, or cold-brew. Our blends are tuned for clarity at any temperature.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-[140vh]" aria-hidden />
    </section>
  );
}

function FinaleCTA({ onShop }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=2000&auto=format&fit=crop"
          alt="Cinematic city"
          className="h-full w-full object-cover"
          style={{ y, opacity }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Your daily ritual, remixed
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-lg text-white/80"
          >
            From sunrise focus to midnight calm — find your scene, brew your mood.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShop}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/10 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Shop the collection
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default function Story({ onShop }) {
  return (
    <div aria-label="Scroll Story">
      <CinematicIntro />
      <Marquee />
      <SplitShowcase />
      <StickySpecs />
      <FinaleCTA onShop={onShop} />
    </div>
  );
}
