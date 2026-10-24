import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'
import { useLanguage } from '../i18n'

const discussionTopics = [
  'Product grade and size specifications',
  'Harvest and availability periods',
  'Indicative volumes',
  'Packaging requirements',
  'Supplier documentation and certifications',
  'Shipping and delivery arrangements',
  'Buyer expectations and commercial terms',
]

export default function Products() {
  const { translate: t } = useLanguage()
  return (
    <>
      <SEO title={t('Fresh Produce Opportunities')} description={t('Duopole Fresh Imports, based in Lausanne, Switzerland, is developing market connections for Kenyan avocados and exploring fresh-produce partnerships.')} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <AssetImage src="/images/hero.png" alt={t('Whole and cut Kenyan avocados on a warm neutral background')} className="h-full w-full object-cover opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/90 via-[#082b20]/55 to-[#082b20]/10" />
        </div>
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#c6e28b]">{t('Our products')}</span>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{t('Fresh produce opportunities')}</h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {t('We are initially focused on Kenyan avocados for the Swiss market, while remaining open to carefully evaluated future opportunities.')}
            </p>
          </div>
        </div>
      </section>

      {/* Kenyan Avocados */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <AssetImage src="/images/hero.png" alt={t('Several whole avocados and a cut avocado with seed and green flesh')} className="h-96 w-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <AssetImage src="/images/avocado-fields.png" alt={t('Illustrative avocado orchard landscape; not represented as a Duopole-owned farm or confirmed supplier')} className="h-56 w-full object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">{t('Initial Market Focus')}</span>
              <h2 className="text-3xl font-bold text-charcoal mb-4">{t('Kenyan Avocados')}</h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                {t('Duopole is developing commercial opportunities around Kenyan avocados, with an interest in connecting suitable suppliers with potential Swiss buyers.')}
              </p>

              <div className="space-y-3 mb-8">
                <p className="mb-3 text-sm font-semibold text-charcoal">{t('Topics for discussion')}</p>
                <ul className="mb-5 grid gap-2 sm:grid-cols-2">
                  {discussionTopics.map((topic) => <li key={topic} className="flex gap-2 text-sm text-charcoal/70"><span className="text-primary" aria-hidden="true">·</span>{t(topic)}</li>)}
                </ul>
                <p className="mb-8 border-l-2 border-accent pl-4 text-xs leading-5 text-charcoal/60">{t('Availability, specifications, documentation, and certifications must be verified with the relevant supplier.')}</p>
              </div>

              <Link
                to="/contact?topic=avocados"
                className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                {t('Discuss Kenyan Avocados →')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blueberries */}
      <section className="bg-[#f3f7f1] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">{t('Potential Future Partnership')}</span>
              <h2 className="text-3xl font-bold text-charcoal mb-4">{t('Blueberries — Future Opportunity')}</h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {t('Blueberries may represent a future opportunity for Duopole. Any activity would depend on supplier confirmation, buyer interest, product suitability, logistics, and commercial feasibility.')}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                <p className="text-sm text-blue-700 font-medium">
                  {t('Blueberries are under consideration only and are not a confirmed supply or current stock offering.')}
                </p>
              </div>
              <Link
                to="/contact?topic=blueberries&message=I%20would%20like%20to%20register%20interest%20in%20a%20potential%20blueberry%20partnership."
                className="inline-block bg-charcoal text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                {t('Register Your Interest →')}
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <AssetImage src="/images/blueberries.png" alt={t('Fresh blueberries with natural blue bloom on a neutral background')} className="h-96 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[.65fr_1fr]">
          <AssetImage src="/images/hero.png" alt={t('Illustrative avocado product image')} className="h-52 w-full rounded-xl object-cover sm:h-60" />
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h3 className="font-bold text-charcoal mb-3">{t('Product Enquiry Note')}</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              {t('Product specifications and supply offers are subject to confirmation. All proposed transactions depend on suitable suppliers, buyer requirements, applicable regulations and agreed commercial terms. No product stock, pricing or delivery dates are guaranteed without written supplier and buyer agreement.')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
