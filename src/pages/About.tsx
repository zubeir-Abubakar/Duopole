import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'
import { useLanguage } from '../i18n'

const companyIntroduction = {
  title: 'About Duopole',
  src: '/Duopole_Company_Introduction.pdf',
}

const productCatalog = {
  title: 'Product Catalog',
  src: '/Duopole_Avocado_Product_Catalogue.pdf',
}

const values = [
  { title: 'Transparency', desc: 'We are honest about what we can offer and what remains to be confirmed.' },
  { title: 'Product Quality Awareness', desc: 'We aim to identify suppliers able to meet buyer specifications and relevant requirements.' },
  { title: 'Responsible Sourcing', desc: 'We aim to work with growers and exporters who operate ethically and sustainably.' },
  { title: 'Clear Communication', desc: 'We communicate clearly with all parties throughout the supply chain process.' },
  { title: 'Commercial Integrity', desc: 'All arrangements are transparent and mutually agreed in writing.' },
  { title: 'Long-term Collaboration', desc: 'We seek to build enduring relationships, not one-off transactions.' },
]

export default function About() {
  const { translate: t } = useLanguage()
  const [documentToShow, setDocumentToShow] = useState<{ title: string; src: string } | null>(null)
  const documentDialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = documentDialog.current
    if (!dialog) return

    if (documentToShow && !dialog.open) dialog.showModal()
    if (!documentToShow && dialog.open) dialog.close()
  }, [documentToShow])

  return (
    <>
      <SEO title={t('About Duopole')} description={t("Learn about Duopole Fresh Imports' market-development approach connecting fresh-produce suppliers and prospective buyers in Switzerland.")} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <AssetImage src="/images/avocado-fields.png" alt={t('Kenyan avocado trees bearing fruit among green leaves')} loading="eager" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/90 via-[#082b20]/60 to-[#082b20]/10" />
        </div>
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6e28b]">{t('About Duopole')}</span>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{t('Building connections across fresh-produce markets')}</h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {t('A developing market-development initiative connecting Kenyan producers with Swiss buyers.')}
            </p>
            <div className="mt-8 flex flex-nowrap gap-3">
              <button
                type="button"
                onClick={() => setDocumentToShow(companyIntroduction)}
                className="flex-1 rounded-lg bg-accent px-2 py-3 text-[13px] font-semibold text-charcoal transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex-none sm:px-10 sm:py-4 sm:text-lg"
              >
                {t('About Duopole')}
              </button>
              <button
                type="button"
                onClick={() => setDocumentToShow(productCatalog)}
                className="flex-1 rounded-lg bg-accent px-2 py-3 text-[13px] font-semibold text-charcoal transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex-none sm:px-10 sm:py-4 sm:text-lg"
              >
                {t('Product Catalog')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={documentDialog}
        aria-labelledby="about-document-title"
        onClose={() => setDocumentToShow(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setDocumentToShow(null)
        }}
        className="m-auto max-h-[92vh] w-[calc(100%-1rem)] max-w-6xl overflow-hidden rounded-2xl border-0 p-0 shadow-2xl backdrop:bg-charcoal/80"
      >
        {documentToShow && (
          <div className="flex h-[92vh] max-h-[92vh] flex-col bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3 sm:px-6">
              <h2 id="about-document-title" className="text-lg font-bold text-charcoal sm:text-xl">
                {t(documentToShow.title)}
              </h2>
              <button
                type="button"
                autoFocus
                onClick={() => setDocumentToShow(null)}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary"
              >
                {t('Close')}
              </button>
            </div>
            <iframe
              src={documentToShow.src}
              title={documentToShow.title}
              className="min-h-0 w-full flex-1"
            />
          </div>
        )}
      </dialog>

      {/* Who We Are */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('Who We Are')}</span>
              <h2 className="mt-3 text-3xl font-bold text-charcoal mb-6">{t('A Developing Fresh-Produce Business')}</h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {t('Duopole Fresh Imports is a market-development initiative based in Lausanne, Switzerland. Our aim is to explore practical commercial connections between fresh-produce suppliers and potential buyers in the Swiss market.')}
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                {t('Kenyan avocados are our initial focus. We are developing an understanding of buyer requirements and potential market opportunities in Switzerland.')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <AssetImage src="/images/avocado-fields.png" alt={t('Illustrative Kenyan agricultural landscape; this orchard is not represented as Duopole-owned or contracted')} className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('Our initial focus')}</p>
              <h2 className="mt-3 text-3xl font-bold text-charcoal">{t('Kenyan avocados for Switzerland')}</h2>
              <p className="mt-4 text-sm leading-6 text-charcoal/65">{t('We are developing an understanding of buyer requirements and potential market opportunities in Switzerland.')}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">{t('How we approach partnerships')}</h2>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-charcoal/70">
                <li><span className="mr-3 font-bold text-primary">01</span>{t('Start with a clear understanding of supplier and buyer requirements.')}</li>
                <li><span className="mr-3 font-bold text-primary">02</span>{t('Discuss product specifications, seasonality, indicative quantities, and commercial expectations.')}</li>
                <li><span className="mr-3 font-bold text-primary">03</span>{t('Explore suitable introductions and market-development arrangements.')}</li>
                <li><span className="mr-3 font-bold text-primary">04</span>{t('Confirm responsibilities, commission, payment terms, and conditions in writing before agreed work begins.')}</li>
              </ol>
              <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-6 text-charcoal/65">{t('Professional communication, realistic commitments, transparency, and long-term thinking guide the relationships we aim to build.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-12 sm:py-16" aria-label={t('Fresh-produce detail')}>
        <AssetImage
          src="/images/Screenshot%202026-10-21%20at%2013.09.08.png"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[#104b32]/85" />
        <div className="mx-auto max-w-[1000px] px-5 text-center text-white sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6e28b]">{t('Our perspective')}</p>
          <p className="mt-3 text-xl font-medium leading-relaxed sm:text-2xl">{t('Transparent conversations. Realistic opportunities. Relationships built with care.')}</p>
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
              <h3 className="text-xl font-bold text-charcoal mb-4">{t('Our Mission')}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t('To connect fresh-produce supply with genuine market demand through responsible sourcing, clear communication and mutually beneficial partnerships.')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">{t('Our Vision')}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t('To develop a trusted bridge between fresh-produce suppliers and buyers across Kenya and Switzerland — an aspiration we are working towards through every partnership and connection we build.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('What We Stand For')}</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal">{t('Our Values')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-3 h-3 bg-accent rounded-full mb-4" />
                <h3 className="font-bold text-charcoal mb-2">{t(title)}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{t(desc)}</p>
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
          <h2 className="text-3xl font-bold mb-6">{t('Our Approach')}</h2>
          <p className="text-gray-200 leading-relaxed mb-8 text-lg">
            {t('Duopole is developing its market network and welcomes discussions with growers, exporters, importers and prospective buyers. Our intended approach is methodical and transparent: to review supplier information, understand buyer specifications and explore discussions when there is a credible commercial opportunity.')}
          </p>
          <Link
            to="/partnerships"
            className="inline-block bg-accent text-charcoal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t('Explore Partnerships →')}
          </Link>
        </div>
      </section>
    </>
  )
}
