import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onShopNow }) {
  const [hover, setHover] = useState(false);
  const title = 'Un sorso di benessere, ogni giorno.';
  const letters = useMemo(() => title.split(''), [title]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Soft overlays that don't block interaction with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-200/30 via-transparent to-emerald-200/30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-xs text-emerald-800 ring-1 ring-emerald-200 backdrop-blur"
            >
              Benvenuto nel tuo rituale quotidiano
            </motion.div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
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
              <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] bg-emerald-600/80 align-middle animate-pulse" aria-hidden />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 max-w-xl text-slate-600"
            >
              Sorgenti sostenibili, miscele artigianali e aromi che portano calma. Scopri tè verdi, neri e infusi erbali selezionati con cura.
            </motion.p>

            <div className="relative mt-8">
              <motion.button
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                onClick={onShopNow}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-900/10 ring-1 ring-emerald-500/10 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                🛍️ Scopri le nostre miscele

                {/* Steam puff microinteraction (behind the button) */}
                <AnimatePresence>
                  {hover && (
                    <motion.span
                      key="steam"
                      initial={{ opacity: 0.0, y: 8, scale: 0.9, filter: 'blur(8px)' }}
                      animate={{ opacity: 0.6, y: -22, scale: 1.15, filter: 'blur(2px)' }}
                      exit={{ opacity: 0, y: -40, scale: 1.25, filter: 'blur(10px)' }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="pointer-events-none absolute -left-7 -top-5 inline-block h-10 w-10 rounded-full bg-white/70 mix-blend-screen"
                      aria-hidden
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <div className="text-2xl font-bold text-slate-900">3000+</div>
                <div className="text-xs text-slate-600">Clienti felici</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-xs text-slate-600">Origini singole</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-600">Packaging plastic-free</div>
              </motion.div>
            </div>
          </div>

          {/* 3D Spline side */}
          <div className="relative h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100/60 to-emerald-200/40 blur-2xl" aria-hidden />
            <div className="relative h-full w-full rounded-3xl border border-emerald-200/60 bg-white/40 backdrop-blur">
              <Spline
                scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
