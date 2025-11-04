export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-emerald-100 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Verdant Tea Co.</h3>
          <p className="mt-2 text-sm text-slate-600">Curating small-batch teas for calm, focus, and daily joy.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Customer Care</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-emerald-700" href="#">Shipping & returns</a></li>
            <li><a className="hover:text-emerald-700" href="#">FAQ</a></li>
            <li><a className="hover:text-emerald-700" href="#">Track order</a></li>
          </ul>
        </div>
        <div>
          <h4 id="about" className="text-sm font-semibold text-slate-900">About</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-emerald-700" href="#">Our story</a></li>
            <li><a className="hover:text-emerald-700" href="#">Sourcing</a></li>
            <li><a className="hover:text-emerald-700" href="#">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Newsletter</h4>
          <p className="mt-2 text-sm text-slate-600">Get 10% off your first order. No spam, just good tea.</p>
          <form className="mt-3 flex overflow-hidden rounded-md ring-1 ring-inset ring-emerald-200">
            <input type="email" required placeholder="you@example.com" className="flex-1 border-0 px-3 py-2 text-sm focus:outline-none" />
            <button className="bg-emerald-600 px-4 text-sm font-medium text-white hover:bg-emerald-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-emerald-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Verdant Tea Co. All rights reserved.
      </div>
    </footer>
  );
}
