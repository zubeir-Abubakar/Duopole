import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'

const partnershipSections = [
  {
    label: '01 · Supplier introductions',
    title: 'Supplier Introductions',
    img: '/images/demand.png',
    imgAlt: 'Business professionals discussing fresh-produce sourcing documents',
    desc: 'We welcome discussions with suppliers interested in exploring potential demand and commercial relationships in Switzerland.',
    points: [
      'Share verifiable company and product information',
      'Discuss potential buyer requirements',
      'Consider introductions where suitable',
    ],
  },
  {
    label: '02 · Swiss market development',
    title: 'Swiss Market Development',
    img: '/images/market.png',
    imgAlt: 'Professionals reviewing commercial documents together',
    desc: 'We can discuss market-development support and introductions where there is a suitable fit between the supplier, product, and potential buyers.',
    points: [
      'Understand market context and buyer interest',
      'Discuss product positioning and specifications',
      'Agree scope before any representation work',
    ],
  },
  {
    label: '03 · Buyer-led sourcing',
    title: 'Buyer-Led Sourcing',
    img: '/images/packaging.png',
    imgAlt: 'Illustrative fresh-produce logistics and packaging; not represented as operated by Duopole',
    desc: 'We welcome enquiries from buyers who can share product specifications, indicative volumes, quality requirements, and sourcing expectations.',
    points: [
      'Review grades, size and packaging requirements',
      'Discuss indicative volumes and seasonality',
      'Explore potentially suitable supplier options',
    ],
  },
  {
    label: '04 · Commission-based cooperation',
    title: 'Commission-Based Cooperation',
    img: '/images/negotiations.png',
    imgAlt: 'Business professionals discussing a potential commercial arrangement',
    desc: 'Where appropriate, a commission-based sales introduction or representation arrangement may be considered. No arrangement is assumed until agreed in writing.',
    points: [
      'Agree scope and responsibilities in advance',
      'Clarify exclusivity, if any',
      'Set commission and payment triggers',
      'Confirm duration and conditions in writing',
    ],
  },
]

const partnershipModels = [
  { title: 'Commission-Based Sales Introductions', desc: 'A commission-based sales introduction or representation arrangement may be considered where suitable. Scope, exclusivity, commission, payment triggers, duration, and responsibilities are agreed in writing before work begins.' },
  { title: 'Market-Development Representation', desc: 'We represent suppliers in Swiss market development, building awareness and buyer relationships over time.' },
  { title: 'Buyer-Led Sourcing', desc: 'We source to specific buyer specifications, working to identify the right supply partner for a defined requirement.' },
  { title: 'Supplier–Buyer Introductions', desc: 'We make structured introductions between verified suppliers and qualified buyers to facilitate direct commercial discussions.' },
]

const partnershipSteps = [
  { n: '1', title: 'Initial Introduction', desc: 'A conversation to understand your role, interest and commercial objectives.' },
  { n: '2', title: 'Information Exchange', desc: 'Exchange of verified company information, product specifications and market interest.' },
  { n: '3', title: 'Opportunity Discussion', desc: 'Assessment of market opportunity, buyer requirements and supply capability.' },
  { n: '4', title: 'Agreement on Terms', desc: 'Clear agreement on roles, responsibilities and commercial terms — in writing.' },
  { n: '5', title: 'Due Diligence & Progression', desc: 'Transactions proceed only after due diligence and all relevant requirements are satisfied.' },
]

export default function Partnerships() {
  return (
    <>
      <SEO title="Fresh-Produce Partnerships" description="Duopole welcomes discussions with Kenyan growers and exporters, Swiss importers and wholesalers, and international fresh-produce suppliers." />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/produce-trade-partnership.webp"
            alt="Business professionals discussing fresh-produce sourcing documents"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/90 via-[#082b20]/65 to-[#082b20]/15" />
        </div>
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#c6e28b]">Partnership opportunities</span>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Let's build valuable fresh-produce partnerships</h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              We are interested in connecting suppliers with market opportunities and exploring practical commercial arrangements across the fresh-produce supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Sections */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] space-y-20 px-5 sm:px-8 sm:space-y-24">
          {partnershipSections.map(({ label, title, img, imgAlt, desc, points }, i) => (
            <div key={label} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">{label}</span>
                <h2 className="text-3xl font-bold text-charcoal mb-4">{title}</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">{desc}</p>
                <h3 className="font-semibold text-charcoal mb-3">Potential Collaboration:</h3>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-charcoal/70 text-sm">
                      <span className="mt-1 w-4 h-4 rounded-full bg-accent/30 flex-shrink-0 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`overflow-hidden rounded-xl ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <AssetImage src={img} alt={imgAlt} className="h-80 w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8f3] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Sourcing and logistics</p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">Clarity before commitment</h2>
            <p className="mt-4 text-sm leading-6 text-charcoal/65">Before pursuing an opportunity, the relevant parties should clarify availability, quality specifications, indicative volumes, pricing, shipping responsibilities, documentation, and payment terms.</p>
            <p className="mt-4 border-l-2 border-accent pl-4 text-xs leading-5 text-charcoal/55">Logistics and import arrangements must be confirmed with the relevant supplier, buyer, importer, and service providers. Duopole does not represent this image as its own facility or transport operation.</p>
          </div>
          <AssetImage src="/images/logistics.png" alt="Illustrative produce logistics facility with refrigerated transport equipment" className="h-72 w-full rounded-xl object-cover sm:h-96" />
        </div>
      </section>

      {/* Commercial Models */}
      <section className="py-24 bg-botanical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Commercial Structure</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal">Proposed Partnership Models</h2>
            <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto">
              All partnership arrangements are subject to written agreement. No commission rate or exclusive arrangement is assumed without formal confirmation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {partnershipModels.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-charcoal mb-3">{title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Getting Started</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal">How a Partnership Can Begin</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 mx-32" />
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {partnershipSteps.map(({ n, title, desc }) => (
                <div key={n} className="relative text-center">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10">
                    {n}
                  </div>
                  <h3 className="font-bold text-charcoal mb-2 text-sm">{title}</h3>
                  <p className="text-charcoal/60 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Propose a Partnership?</h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            Whether you are a farmer, exporter, importer, wholesaler or retailer, we would love to explore how we can work together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-charcoal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            Propose a Partnership →
          </Link>
        </div>
      </section>
    </>
  )
}

