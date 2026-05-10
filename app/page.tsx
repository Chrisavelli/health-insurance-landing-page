import LeadForm from '@/components/LeadForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const benefits = [
  {
    title: 'Compare top plans in one place',
    description:
      'See plan options from trusted carriers without calling around or filling out multiple forms.',
  },
  {
    title: 'Guidance from licensed agents',
    description:
      'Talk with a licensed expert who can help you understand deductibles, networks, and costs.',
  },
  {
    title: 'Fast, no-pressure process',
    description:
      'Get a personalized match quickly and decide at your own pace with no obligation to enroll.',
  },
]

const faqs = [
  {
    question: 'How long does it take to get quotes?',
    answer:
      'Most people receive plan matches in about 5 minutes after submitting the form.',
  },
  {
    question: 'Will this affect my credit score?',
    answer: 'No. Requesting quotes does not affect your credit score.',
  },
  {
    question: 'Can I get help choosing a plan?',
    answer:
      'Yes. A licensed agent can walk you through plan options and answer your coverage questions.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium mb-5">
                Trusted by 10,000+ shoppers
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Find health insurance that fits your needs and budget
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-7 max-w-2xl">
                Compare personalized options for individuals and families. Get expert help and enroll with confidence.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                <span>✔ No obligation quotes</span>
                <span>✔ Licensed agent support</span>
                <span>✔ Secure & private</span>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>

        <section className="py-14 px-4 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Featured coverage categories</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
              <div className="rounded-lg border border-slate-200 px-4 py-3 bg-slate-50">Marketplace Plans</div>
              <div className="rounded-lg border border-slate-200 px-4 py-3 bg-slate-50">Family Coverage</div>
              <div className="rounded-lg border border-slate-200 px-4 py-3 bg-slate-50">Self-Employed Plans</div>
              <div className="rounded-lg border border-slate-200 px-4 py-3 bg-slate-50">Short-Term Coverage</div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why choose ClearQuote Health?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">People we helped recently</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <blockquote className="rounded-xl bg-slate-100 p-6 border border-slate-200">
                <p className="mb-4 text-slate-700">&ldquo;I found a plan that saved us $180 per month and still included our doctors.&rdquo;</p>
                <footer className="font-semibold">— Sarah M., Tampa, FL</footer>
              </blockquote>
              <blockquote className="rounded-xl bg-slate-100 p-6 border border-slate-200">
                <p className="mb-4 text-slate-700">&ldquo;The process was easy, and the agent explained everything clearly before I enrolled.&rdquo;</p>
                <footer className="font-semibold">— John D., Austin, TX</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="bg-white border border-slate-200 rounded-lg p-5">
                  <summary className="font-semibold cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Ready to compare your options?</h2>
            <p className="text-blue-100 mb-6">Start with a quick quote request and we&apos;ll help you review plans that match your needs.</p>
            <a href="#lead-form" className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-100 transition-colors">
              Get my free quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
