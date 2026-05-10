export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-900">ClearQuote Health</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#how-it-works" className="hover:text-blue-700 transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-blue-700 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
        </nav>
        <a href="#lead-form" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
          Get quote
        </a>
      </div>
    </header>
  )
}
