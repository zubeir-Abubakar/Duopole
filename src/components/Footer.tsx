import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'
import AssetImage from './AssetImage'
import { businessDetails, whatsappHref } from '../config/business'
import { useLanguage } from '../i18n'

export default function Footer() {
  const { translate: t } = useLanguage()
  const year = new Date().getFullYear()
  const whatsappLink = whatsappHref()
  return (
    <footer className="relative isolate overflow-hidden bg-[#073f2b] text-white">
      <AssetImage
        src="/images/homepage.png"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#073f2b]/90" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <BrandMark />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              {t('Duopole Fresh Imports is a developing fresh-produce sourcing and market-development business connecting producers and suppliers with potential buyers in Switzerland.')}
            </p>
            <p className="mt-3 text-xs text-gray-400 leading-relaxed max-w-sm">
              {t('Website photography is illustrative and does not depict Duopole farms, suppliers, warehouses or shipments.')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t('Navigation')}</h3>
            <ul className="space-y-2">
              {([
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/products', 'Products'],
                ['/partnerships', 'Partnerships'],
                ['/contact', 'Contact'],
                ['/privacy', 'Privacy Policy'],
              ] as [string, string][]).map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t('Contact')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">{t('Email')}</span>
                {businessDetails.email ? (
                  <a href={`mailto:${businessDetails.email}`} className="hover:text-accent transition-colors break-all">{businessDetails.email}</a>
                ) : (
                  <span className="text-gray-400">{t('Add verified business email before launch')}</span>
                )}
              </li>
              <li>
                <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">{t('WhatsApp')}</span>
                {whatsappLink ? (
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{businessDetails.whatsappNumber}</a>
                ) : (
                  <span className="text-gray-400">{t('Add verified business number before launch')}</span>
                )}
              </li>
              <li>
                <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">{t('Location')}</span>
                <span>{businessDetails.publicLocation} — {t('market-development focus')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {year} Duopole Fresh Imports. All rights reserved.</p>
          <Link to="/privacy" className="text-xs text-gray-400 hover:text-accent transition-colors">
            {t('Privacy Policy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
