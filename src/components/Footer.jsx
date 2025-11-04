import React from 'react';

export default function Footer({ cartCount = 0 }) {
  return (
    <footer id="about" className="border-t border-emerald-800/50 bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-emerald-100/80">© {new Date().getFullYear()} Verdant Tea. All rights reserved.</p>
        {cartCount > 0 && (
          <div className="rounded-full bg-emerald-900/60 px-4 py-2 text-sm text-emerald-100/90 ring-1 ring-emerald-400/20">
            {cartCount} item{cartCount > 1 ? 's' : ''} in cart
          </div>
        )}
      </div>
    </footer>
  );
}
