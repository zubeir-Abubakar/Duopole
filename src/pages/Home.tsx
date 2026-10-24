import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'
import { emailHref } from '../config/business'
import { useLanguage } from '../i18n'

const serviceCards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
    ),
    title: 'Market Development',
    desc: 'Identifying potential buyers and exploring market opportunities for fresh produce in Switzerland and beyond.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Supplier Partnerships',
    desc: 'Building relationships with growers, exporters and sourcing partners committed to quality and reliability.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
    title: 'Buyer Connections',
    desc: 'Helping suppliers and prospective buyers explore product specifications, packaging and commercial requirements.',
  },
]

const steps = [
  { n: '01', title: 'Understand Requirements', desc: 'We take time to understand what Swiss buyers need — variety, volume, packaging, quality standards and delivery expectations.' },
  { n: '02', title: 'Identify Suppliers', desc: 'We engage suitable Kenyan growers and exporters who can meet those specifications and provide verified documentation.' },
  { n: '03', title: 'Review Feasibility', desc: 'We review product specifications, indicative pricing and delivery feasibility before proceeding.' },
  { n: '04', title: 'Facilitate Discussions', desc: 'We bring parties together for commercial discussions. Orders proceed only after due diligence and agreement.' },
]

export default function Home() {
  const { translate: t } = useLanguage()
  return (
    <>
      <SEO title={t('Duopole Fresh Imports | Kenyan Avocados for the Swiss Market')} description={t('Duopole Fresh Imports, based in Lausanne, Switzerland, is developing market connections for Kenyan avocados and exploring fresh-produce partnerships.')} />
      {/* Hero */}
      <section className="relative flex min-h-[660px] items-center overflow-hidden bg-[#0b3527] pt-[76px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <AssetImage
            src="/images/avocado-fields.png"
            alt={t('Ripe green avocados growing among glossy leaves in a Kenyan orchard')}
            loading="eager"
            fetchPriority="high"
            objectPosition="60% center"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/95 via-[#082b20]/75 to-[#082b20]/15" />
        </div>
        <div className="relative mx-auto w-full max-w-[1380px] px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-[680px]">
              
              <h1 className="mb-6 max-w-[660px] text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
                {t("Connecting Kenya's Fresh Produce with the")}{' '}
                <span className="text-[#c6e28b]">{t('Swiss Market')}</span>
              </h1>
              <p className="mb-9 max-w-[550px] text-base leading-7 text-white/85 sm:text-lg">
                {t('Fresh and Premium. We are developing connections between fresh-produce suppliers and potential buyers in Switzerland, beginning with Kenyan avocados.')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#a7c957] px-6 py-3 text-sm font-semibold text-[#173727] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t('Discuss a partnership')} <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/products"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t('Explore our products')}
                </Link>
              </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Fresh produce. Meaningful connections.')}</p>
            <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-3xl">{t('A market-development focus, built around real conversations.')}</h2>
            <p className="mt-4 text-sm leading-6 text-charcoal/65">{t('Duopole Fresh Imports is developing commercial relationships that connect fresh-produce suppliers with potential buyers in Switzerland. Our initial focus is Kenyan avocados, with future opportunities explored selectively and transparently.')}</p>
          </div>
          <Link to="/about" className="shrink-0 text-sm font-semibold text-primary hover:text-primary-dark">{t('Learn about Duopole')} <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="border-b border-[#e6eee6] bg-white" aria-label="Our focus">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 divide-x divide-y divide-[#e6eee6] px-5 sm:grid-cols-4 sm:divide-y-0 bg-[#f7faf6]">
          {[
            ['01', 'Kenyan origin', 'Initial focus on Kenyan avocados'],
            ['02', 'Swiss market', 'Developing buyer connections'],
            ['03', 'Open dialogue', 'For growers, buyers and partners'],
            ['04', 'Clear process', 'Specifications confirmed case by case'],
          ].map(([number, title, detail]) => (
            <div key={number} className="px-4 py-5 sm:px-6 sm:py-7">
              <span className="block text-[10px] font-bold tracking-[0.16em] text-primary/60">{number}</span>
              <h2 className="mt-2 text-sm font-bold text-charcoal">{t(title)}</h2>
              <p className="mt-1 text-xs leading-5 text-charcoal/60">{t(detail)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
            <span className="text-primary font-semibold text-m uppercase tracking-wider">{t('What We Do')}</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">{t('The connections behind the produce')}</h2>
            </div>
            <p className="max-w-lg text-m leading-6 text-charcoal/90">
              {t('We are building the commercial connections that can help fresh produce meet market demand in Switzerland.')}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {serviceCards.map(({ icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-[#e5ece4] bg-[#f7faf6] p-7 transition-colors hover:border-primary/30 sm:p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{t(title)}</h3>
                <p className="text-charcoal/60 leading-relaxed text-sm">{t(desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initial Product Focus */}
      <section className="bg-[#f3f7f1] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Product opportunities')}</span>
              <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">{t('A considered starting point')}</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-primary hover:text-primary-dark">{t('View product details')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-[#e3ebe1] bg-white">
              <AssetImage src="/images/hero.png" alt={t('Whole and cut fresh avocados on a warm neutral background')} className="h-56 w-full object-cover sm:h-64" />
              <div className="p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{t('Initial focus')}</span>
                <h3 className="mt-2 text-2xl font-bold text-charcoal">{t('Kenyan avocados')}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/65">{t('Exploring sourcing opportunities for the Swiss market. Product availability, specifications and terms are confirmed with suitable partners.')}</p>
                <Link to="/contact?topic=avocados" className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary-dark">{t('Discuss avocado opportunities')} <span aria-hidden="true" className="ml-2">→</span></Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-[#e3ebe1] bg-white">
              <AssetImage src="/images/blueberries.png" alt={t('Fresh blueberries with natural bloom and green leaves')} className="h-56 w-full object-cover sm:h-64" />
              <div className="p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#657c9a]">{t('Potential future partnership')}</span>
                <h3 className="mt-2 text-2xl font-bold text-charcoal">{t('Blueberries')}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/65">{t('An opportunity to explore if suitable supply, buyer demand and commercially viable logistics can be established.')}</p>
                <Link to="/contact?topic=blueberries&message=I%20would%20like%20to%20register%20interest%20in%20a%20potential%20blueberry%20partnership." className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary-dark">{t('Enquire about future opportunities')} <span aria-hidden="true" className="ml-2">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('Our Process')}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-charcoal">{t('How We Work')}</h2>
            <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto">
              {t('Orders are subject to supplier confirmation, buyer agreement and applicable import requirements.')}
            </p>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_.7fr]">
            <div className="grid gap-8 sm:grid-cols-2">
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="relative border-t border-[#e3ebe1] pt-5">
                  <div className="mb-3 text-xs font-bold tracking-[0.16em] text-primary">{n}</div>
                  <h3 className="mb-3 text-lg font-bold text-charcoal">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/60">{t(desc)}</p>
                </div>
              ))}
            </div>
            <AssetImage src="/images/avocado-fields.png" alt={t('Illustrative Kenyan avocado orchard landscape')} className="h-64 w-full rounded-xl object-cover sm:h-80" />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#103d2b] py-24 sm:py-32">
        <AssetImage src="/images/avocado-fields.png" alt={t('Avocado orchard across rolling green agricultural land')} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082b20]/90 via-[#082b20]/65 to-[#082b20]/20" />
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6e28b]">{t('Lausanne · Switzerland')}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{t('A Swiss market perspective with a fresh-produce focus.')}</h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:text-base">{t('Based in Lausanne, Duopole is focused on building relevant connections between fresh-produce suppliers and the Swiss market. We prioritise transparent discussions, realistic opportunities, and partnership arrangements that are clearly agreed.')}</p>
            <Link to="/about" className="mt-7 inline-flex rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark">{t('More about us')} <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <AssetImage src="/images/PARTNERSHIP.png" alt={t('Business professionals discussing fresh-produce sourcing documents')} className="h-72 w-full object-cover sm:h-96" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Partnerships')}</p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">{t('Let’s build the right partnership.')}</h2>
            <p className="mt-4 text-sm leading-6 text-charcoal/65">{t('We welcome conversations with fresh-produce suppliers, Swiss importers, wholesalers, distributors, and other businesses interested in exploring commercially suitable opportunities.')}</p>
            <ul className="mt-6 grid gap-3 text-sm text-charcoal/75 sm:grid-cols-2">
              <li className="border-l-2 border-accent pl-3">{t('Supplier introductions')}</li>
              <li className="border-l-2 border-accent pl-3">{t('Swiss market development')}</li>
              <li className="border-l-2 border-accent pl-3">{t('Buyer-led sourcing discussions')}</li>
              <li className="border-l-2 border-accent pl-3">{t('Written terms before agreed work')}</li>
            </ul>
            <p className="mt-5 text-xs leading-5 text-charcoal/55">{t('Commission-based arrangements or representation can be considered where suitable, with scope and terms agreed in writing in advance.')}</p>
            <Link to="/partnerships" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">{t('Explore partnerships')} <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f3] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Sourcing & logistics')}</p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">{t('Practical conversations about sourcing.')}</h2>
            <p className="mt-4 text-sm leading-6 text-charcoal/65">{t('Fresh-produce opportunities require clear discussions about product specifications, quantities, seasonality, quality expectations, shipping arrangements, documentation, and commercial terms.')}</p>
            <p className="mt-4 border-l-2 border-accent pl-4 text-xs leading-5 text-charcoal/55">{t('Specific sourcing and logistics arrangements depend on the suppliers, buyers, importers, and service providers involved. The image is illustrative and does not represent Duopole facilities or transport.')}</p>
          </div>
          <div className="order-1 overflow-hidden rounded-xl lg:order-2">
            <AssetImage src="/images/logistics2.png" alt={t('Illustrative produce logistics facility with refrigerated transport equipment')} className="h-72 w-full object-cover sm:h-96" />
          </div>
        </div>
      </section>

      {/* Partnership Invitation */}
      <section className="bg-[#eef6ef] py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Fresh and Premium')}</p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">{t('Have a fresh-produce opportunity?')}</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/65">{t('Whether you supply Kenyan avocados or are exploring fresh-produce sourcing for the Swiss market, we welcome an introductory conversation.')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/41793680570" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">{t('Message on WhatsApp')}</a>
            <a href={emailHref()} className="rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white">{t('Send an email')}</a>
          </div>
        </div>
      </section>
    </>
  )
}
