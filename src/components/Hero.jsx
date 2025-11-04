import { Star } from 'lucide-react';

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs text-emerald-700 backdrop-blur">
              <Star size={14} className="fill-emerald-500/30 text-emerald-600" />
              Award-winning blends
            </div>
            <h1 className="mt-4 font-[800] tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900">
              Elevate your daily ritual with exquisite tea
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Sourced from sustainable gardens and crafted in small batches. Discover green, black and herbal selections tailored for calm and clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onShopNow}
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Shop bestsellers
              </button>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-5 py-3 text-emerald-700 hover:border-emerald-300"
              >
                Learn more
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div>
                <dt className="text-2xl font-bold text-slate-900">3000+</dt>
                <dd className="text-xs text-slate-600">Happy customers</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900">50+</dt>
                <dd className="text-xs text-slate-600">Single-origin teas</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900">100%</dt>
                <dd className="text-xs text-slate-600">Plastic-free packaging</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:h-[480px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-200 blur-3xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1400&auto=format&fit=crop"
              alt="A calming tea set"
              className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
