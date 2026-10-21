import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'

const values = [
  { title: 'Transparency', desc: 'We are honest about what we can offer and what remains to be confirmed.' },
  { title: 'Product Quality Awareness', desc: 'We aim to identify suppliers able to meet buyer specifications and relevant requirements.' },
  { title: 'Responsible Sourcing', desc: 'We aim to work with growers and exporters who operate ethically and sustainably.' },
  { title: 'Clear Communication', desc: 'We communicate clearly with all parties throughout the supply chain process.' },
  { title: 'Commercial Integrity', desc: 'All arrangements are transparent and mutually agreed in writing.' },
  { title: 'Long-term Collaboration', desc: 'We seek to build enduring relationships, not one-off transactions.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Duopole" description="Learn about Duopole Fresh Imports' market-development approach connecting fresh-produce suppliers and prospective buyers in Switzerland." />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <AssetImage src="/images/avocado-fields.png" alt="Kenyan avocado trees bearing fruit among green leaves" loading="eager" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/90 via-[#082b20]/60 to-[#082b20]/10" />
        </div>
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6e28b]">About Duopole</span>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Building connections across fresh-produce markets</h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              A developing market-development initiative connecting Kenyan producers with Swiss buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="mt-3 text-3xl font-bold text-charcoal mb-6">A Developing Fresh-Produce Business</h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Duopole Fresh Imports is a market-development initiative based in Lausanne, Switzerland. Our aim is to explore practical commercial connections between fresh-produce suppliers and potential buyers in the Swiss market.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Kenyan avocados are our initial focus. We are developing an understanding of buyer requirements and potential market opportunities in Switzerland.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <AssetImage src="/images/avocado-fields.png" alt="Illustrative Kenyan agricultural landscape; this orchard is not represented as Duopole-owned or contracted" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Our initial focus</p>
              <h2 className="mt-3 text-3xl font-bold text-charcoal">Kenyan avocados for Switzerland</h2>
              <p className="mt-4 text-sm leading-6 text-charcoal/65">We are developing an understanding of buyer requirements and potential market opportunities in Switzerland.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">How we approach partnerships</h2>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-charcoal/70">
                <li><span className="mr-3 font-bold text-primary">01</span>Start with a clear understanding of supplier and buyer requirements.</li>
                <li><span className="mr-3 font-bold text-primary">02</span>Discuss product specifications, seasonality, indicative quantities, and commercial expectations.</li>
                <li><span className="mr-3 font-bold text-primary">03</span>Explore suitable introductions and market-development arrangements.</li>
                <li><span className="mr-3 font-bold text-primary">04</span>Confirm responsibilities, commission, payment terms, and conditions in writing before agreed work begins.</li>
              </ol>
              <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-6 text-charcoal/65">Professional communication, realistic commitments, transparency, and long-term thinking guide the relationships we aim to build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-12 sm:py-16" aria-label="Fresh-produce detail">
        <AssetImage
          src="/images/Screenshot%202026-10-21%20at%2013.09.08.png"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[#104b32]/85" />
        <div className="mx-auto max-w-[1000px] px-5 text-center text-white sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6e28b]">Our perspective</p>
          <p className="mt-3 text-xl font-medium leading-relaxed sm:text-2xl">Transparent conversations. Realistic opportunities. Relationships built with care.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f3f7f1] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Our Mission</h3>
              <p className="text-charcoal/70 leading-relaxed">
                To connect fresh-produce supply with genuine market demand through responsible sourcing, clear communication and mutually beneficial partnerships.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Our Vision</h3>
              <p className="text-charcoal/70 leading-relaxed">
                To develop a trusted bridge between fresh-produce suppliers and buyers across Kenya and Switzerland — an aspiration we are working towards through every partnership and connection we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-3 h-3 bg-accent rounded-full mb-4" />
                <h3 className="font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative isolate overflow-hidden py-24 text-white">
        <AssetImage src="/images/avocado-fields.png" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-primary/90" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-gray-200 leading-relaxed mb-8 text-lg">
            Duopole is developing its market network and welcomes discussions with growers, exporters, importers and prospective buyers. Our intended approach is methodical and transparent: to review supplier information, understand buyer specifications and explore discussions when there is a credible commercial opportunity.
          </p>
          <Link
            to="/partnerships"
            className="inline-block bg-accent text-charcoal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Explore Partnerships →
          </Link>
        </div>
      </section>
    </>
  )
}

