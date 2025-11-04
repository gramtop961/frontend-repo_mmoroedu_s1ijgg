import { useId } from 'react';
import { Star, Plus } from 'lucide-react';

export default function Products({ products = [], onAddToCart, query, onQueryChange, category, onCategoryChange }) {
  const searchId = useId();
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'green', label: 'Green' },
    { key: 'black', label: 'Black' },
    { key: 'herbal', label: 'Herbal' },
  ];

  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Bestselling teas</h2>
          <p className="mt-1 text-sm text-slate-600">Small-batch blends, packed fresh. Free shipping over $40.</p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-emerald-200 focus-within:ring-emerald-400 overflow-hidden">
            <span className="hidden sm:inline-flex items-center bg-emerald-50 px-3 text-sm text-emerald-700">Search</span>
            <input
              id={searchId}
              value={query}
              onChange={(e) => onQueryChange?.(e.target.value)}
              placeholder="Find your tea..."
              className="min-w-[220px] flex-1 border-0 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex gap-1 rounded-md bg-emerald-50 p-1 text-sm">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => onCategoryChange?.(c.key)}
                className={`rounded-md px-3 py-1.5 transition ${category === c.key ? 'bg-white text-emerald-700 shadow-sm' : 'text-emerald-700 hover:bg-white/60'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <li key={p.id} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">{p.description}</p>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    <Star size={16} className="fill-amber-400" />
                    <span className="text-xs text-slate-600">{p.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-emerald-700">${p.price.toFixed(2)}</p>
                  <p className="text-xs capitalize text-slate-500">{p.category}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => onAddToCart?.(p)}
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <Plus size={16} /> Add to cart
                </button>
                <button className="text-sm text-emerald-700 hover:underline">Details</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {products.length === 0 && (
        <div className="mt-12 rounded-xl border border-emerald-100 bg-white p-8 text-center text-slate-600">
          No teas match your search. Try a different keyword or category.
        </div>
      )}
    </section>
  );
}
