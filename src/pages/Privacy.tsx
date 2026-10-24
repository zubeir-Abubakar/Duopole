import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'
import { businessDetails, displayOrPlaceholder } from '../config/business'
import { useLanguage } from '../i18n'

export default function Privacy() {
  const { translate: t } = useLanguage()
  const privacyContact = displayOrPlaceholder(businessDetails.privacyEmail || businessDetails.email, t('Add verified privacy contact email before launch'))
  const legalEntity = displayOrPlaceholder(businessDetails.legalEntity, t('Legal business entity and jurisdiction to be confirmed'))
  const sections = [
    {
      title: '1. Who We Are',
      content: 'Duopole Fresh Imports is a developing fresh-produce sourcing and market-development initiative. The responsible legal entity and jurisdiction must be confirmed before publication: {legalEntity}. For privacy enquiries, contact {privacyContact}.',
    },
    {
      title: '2. Information We Collect',
      content: `The contact form requests your name, business name (optional), business email, country, enquiry type, estimated volume or requirements (optional), message, and privacy acknowledgement. The form is configured to submit enquiries to Formspree. Confirm the provider's actual processing, data collected and applicable terms before publication.`,
    },
    {
      title: '3. How We Use Your Information',
      content: `Information submitted through the contact form will be used to respond to your enquiry, evaluate the stated commercial opportunity and communicate with you about relevant fresh-produce business matters. It will not be used for automated profiling or advertising.`,
    },
    {
      title: '4. Legal Basis for Processing',
      content: `The applicable legal basis for any processing must be determined by the responsible business entity for the circumstances and jurisdiction involved. Where consent is relied on, you may withdraw it. This draft is not legal advice and should be reviewed for the business's actual operations before publication.`,
    },
    {
      title: '5. Data Sharing',
      content: `Form submissions are configured to be processed through Formspree. Review its processing terms and confirm its data location before publication. If relevant to your enquiry, information may be shared with a prospective supply or trade partner only where appropriate and with your knowledge. Personal information is not intended to be sold or shared for third-party advertising.`,
    },
    {
      title: '6. Data Retention',
      content: `Confirm and publish the retention period for enquiry data held by Duopole and Formspree. Enquiry data should be retained only as long as necessary for its stated purpose and applicable record-keeping obligations. You may request deletion, subject to any legal retention requirements.`,
    },
    {
      title: '7. Your Rights',
      content: 'Depending on applicable law, you may have rights to request access, correction or deletion, object to or restrict processing, withdraw consent, or request portability. Contact {privacyContact} to raise a privacy request. The available rights depend on your circumstances and location.',
    },
    {
      title: '8. Cookies and Analytics',
      content: `The site does not intentionally set analytics or advertising cookies. The hosting platform or enabled form provider may use technical storage or logs; verify the actual configuration before publication. Any future non-essential analytics or tracking must be disclosed and configured with the required consent.`,
    },
    {
      title: '9. Security',
      content: `Security measures depend on the hosting and form providers selected. Use HTTPS, restrict access to enquiry data, and enable appropriate provider safeguards. No method of internet transmission is completely secure.`,
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this privacy policy from time to time. The current version will be available on this page. Add a verified review date when the policy is finalized and whenever it is materially updated.`,
    },
    {
      title: '11. Contact',
      content: 'For privacy questions, contact {privacyContact}. The responsible legal entity and contact must be verified before this policy is published.',
    },
  ]

  return (
    <>
      <SEO title={t('Privacy Policy')} description={t('Read how Duopole Fresh Imports handles information shared through business enquiries, including data use, retention, security and privacy contacts.')} />
      <section className="relative isolate overflow-hidden bg-primary-dark pt-32 pb-20 text-white">
        <AssetImage src="/images/avocado-fields.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">{t('Legal')}</span>
            <h1 className="text-4xl font-bold mb-4">{t('Privacy Policy')}</h1>
            <p className="text-gray-300">{t('Draft for owner and legal review before publication.')}</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ {t('Review before publication')}</p>
            <p className="text-sm text-amber-700">
              {t('Before publication, confirm the responsible legal entity, jurisdiction, privacy contact, Formspree processing terms and data location, retention period, hosting logs and actual cookie use. This draft has not been legally reviewed and does not certify compliance.')}
            </p>
          </div>

          {sections.map(({ title, content }) => (
            <div key={title} className="mb-8">
              <h2 className="text-xl font-bold text-charcoal mb-3">{t(title)}</h2>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {t(content).replace('{legalEntity}', legalEntity).replace('{privacyContact}', privacyContact)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
