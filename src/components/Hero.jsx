import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero({ onShopNow }) {
  const [hover, setHover] = useState(false);

  const title = 'Un sorso di benessere, ogni giorno.';

  const letters = useMemo(() => title.split(''), [title]);

  return (
    <section className="relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-steaming-tea-8137/1080p.mp4" type="video/mp4" />
        </video>
        {/* Soft gradients to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.15),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-50 ring-1 ring-white/20 backdrop-blur"
          >
            Benvenuto nel tuo rituale quotidiano
          </motion.div>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="inline-block align-top">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.35, ease: 'easeOut' }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </span>
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] bg-white/80 align-middle animate-pulse" aria-hidden />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 max-w-xl text-white/85"
          >
            Sorgenti sostenibili, miscele artigianali e aromi che portano calma. Scopri tè verdi, neri e infusi erbali selezionati con cura.
          </motion.p>

          <div className="relative mt-8">
            {/* The "cup" area for subtle microinteraction */}
            <div className="pointer-events-none absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/0" />

            <motion.button
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
              onClick={onShopNow}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/10 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900/20"
            >
              🛍️ Scopri le nostre miscele

              {/* Steam puff microinteraction */}
              <AnimatePresence>
                {hover && (
                  <motion.span
                    key="steam"
                    initial={{ opacity: 0.0, y: 8, scale: 0.9, filter: 'blur(6px)' }}
                    animate={{ opacity: 0.6, y: -22, scale: 1.15, filter: 'blur(2px)' }}
                    exit={{ opacity: 0, y: -40, scale: 1.25, filter: 'blur(8px)' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="pointer-events-none absolute -left-7 -top-5 inline-block h-8 w-8 rounded-full bg-white/70 mix-blend-screen"
                    aria-hidden
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center text-white/80">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <div className="text-2xl font-bold">3000+</div>
              <div className="text-xs">Clienti felici</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs">Origini singole</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs">Packaging plastic-free</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
