export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">ClearQuote Health</h2>
          <p className="text-sm text-slate-400 max-w-md">
            We help people compare health insurance options from trusted carriers and connect with licensed agents.
          </p>
        </div>
        <div className="md:text-right text-sm space-y-2">
          <p>Mon–Fri 8am–8pm ET</p>
          <p>(800) 555-0148</p>
          <p>support@clearquotehealth.com</p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-xs text-center text-slate-500">
        © {new Date().getFullYear()} ClearQuote Health. Not affiliated with any federal or state government agency.
      </div>
    </footer>
  )
}
