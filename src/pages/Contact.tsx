import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'
import { businessDetails, displayOrPlaceholder, emailHref, whatsappHref } from '../config/business'

const enquiryTypes = [
  { value: '', label: 'Select an enquiry type' },
  { value: 'buying-avocados', label: 'Buying Kenyan avocados' },
  { value: 'supplying-avocados', label: 'Supplying Kenyan avocados' },
  { value: 'blueberries', label: 'Blueberries / future partnership' },
  { value: 'distribution', label: 'Import or distribution partnership' },
  { value: 'general', label: 'General enquiry' },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const topicParam = searchParams.get('topic') || ''

  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', volume: '',
    enquiryType: topicParam === 'blueberries' ? 'blueberries' : topicParam === 'avocados' ? 'buying-avocados' : '',
    message: searchParams.get('message') || '', privacyAck: false, website: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formState, submitToFormspree, resetForm] = useForm('xeaeylry')
  const whatsappLink = whatsappHref()

  useEffect(() => {
    if (topicParam === 'blueberries') setForm(f => ({ ...f, enquiryType: 'blueberries' }))
    if (topicParam === 'avocados') setForm(f => ({ ...f, enquiryType: 'buying-avocados' }))
    const messageParam = searchParams.get('message')
    if (messageParam) setForm(f => ({ ...f, message: messageParam }))
  }, [topicParam, searchParams])

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'A valid business email is required.'
    if (!form.country.trim()) e.country = 'Country is required.'
    if (!form.enquiryType) e.enquiryType = 'Please select an enquiry type.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Please provide a brief message (at least 10 characters).'
    if (!form.privacyAck) e.privacyAck = 'Please acknowledge the privacy notice.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, type, value } = e.target
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    // A hidden honeypot catches basic automated submissions. A production deployment
    // should also use server-side validation and provider-side spam protection.
    if (form.website) return

    setErrors({})
    await submitToFormspree(e)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'}`

  return (
    <>
      <SEO title="Contact" description="Contact Duopole Fresh Imports to discuss Kenyan avocado sourcing, fresh-produce partnerships and Swiss market-development opportunities." />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20">
        <AssetImage src="/images/demand.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082b20]/95 via-[#082b20]/75 to-[#082b20]/20" />
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#c6e28b]">Contact Duopole</span>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Let's start a conversation</h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Whether you are a buyer, grower, exporter, importer or potential partner, we would be pleased to learn more about your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7f1] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-charcoal">Get in Touch</h2>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We'd love to hear from buyers, suppliers, exporters and potential partners. Reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                {([
                  { icon: '✉️', label: 'Email', value: displayOrPlaceholder(businessDetails.email, 'Add verified business email before launch'), href: businessDetails.email ? `mailto:${businessDetails.email}` : undefined },
                  { icon: 'WA', label: 'WhatsApp', value: businessDetails.whatsappNumber, href: whatsappLink },
                  { icon: '📍', label: 'Location', value: `${businessDetails.publicLocation} — market-development focus`, href: undefined },
                  { icon: '👤', label: 'Contact', value: `${displayOrPlaceholder(businessDetails.contactPerson, 'Contact person to be confirmed')} · Business Development Representative`, href: undefined },
                ] as { icon: string; label: string; value: string; href?: string }[]).map(({ icon, label, value, href }) => (
                  <div key={label} className="bg-white rounded-xl p-5 shadow-sm flex gap-4 items-start">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-primary hover:underline break-all">{value}</a>
                      ) : (
                        <p className="text-sm text-charcoal">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="https://wa.me/41793680570" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Message on WhatsApp
                </a>
                <a href={emailHref()} className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Send an email
                </a>
              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {formState.succeeded ? (
                  <div className="text-center py-12" role="status" aria-live="polite">
                    <div className="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">Enquiry sent</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">Thank you for getting in touch. Your enquiry has been submitted successfully.</p>
                    <button type="button" onClick={() => { resetForm(); setForm(f => ({ ...f, message: '' })) }} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h3 className="text-xl font-bold text-charcoal mb-6">Send an Enquiry</h3>
                    {Object.keys(errors).length > 0 && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">Please review the highlighted fields and complete the required information.</p>}
                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Leave this field empty</label>
                      <input id="website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                    </div>
                    <ValidationError errors={formState.errors} className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800" />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} className={inputClass('name')} placeholder="Your full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                        {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>}
                        <ValidationError field="name" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="company">Company Name</label>
                        <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} className={inputClass('company')} placeholder="Optional" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="email">Business Email *</label>
                        <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} className={inputClass('email')} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                        {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>}
                        <ValidationError field="email" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="country">Country *</label>
                        <input id="country" name="country" type="text" autoComplete="country-name" required value={form.country} onChange={handleChange} className={inputClass('country')} placeholder="Your country" aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? 'country-error' : undefined} />
                        {errors.country && <p id="country-error" className="text-red-600 text-xs mt-1">{errors.country}</p>}
                        <ValidationError field="country" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="enquiryType">Enquiry Type *</label>
                      <select id="enquiryType" name="enquiryType" required value={form.enquiryType} onChange={handleChange} className={inputClass('enquiryType')} aria-invalid={Boolean(errors.enquiryType)} aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}>
                        {enquiryTypes.map(({ value, label }) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                      {errors.enquiryType && <p id="enquiryType-error" className="text-red-600 text-xs mt-1">{errors.enquiryType}</p>}
                      <ValidationError field="enquiryType" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="volume">Estimated volume / requirements</label>
                      <input id="volume" name="volume" type="text" value={form.volume} onChange={handleChange} className={inputClass('volume')} placeholder="Optional" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="message">Message *</label>
                      <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className={inputClass('message')} placeholder="Briefly describe your interest or requirements…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
                      {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>}
                      <ValidationError field="message" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                    </div>
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input id="privacyAck" name="privacyAck" type="checkbox" required checked={form.privacyAck} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" aria-invalid={Boolean(errors.privacyAck)} aria-describedby={errors.privacyAck ? 'privacyAck-error' : undefined} />
                        <span className="text-xs text-charcoal/70">
                          I have read and understood the{' '}
                          <a href="/privacy" className="text-primary underline hover:text-primary-dark" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                          {' '}and consent to my data being used to process this enquiry. *
                        </span>
                      </label>
                      {errors.privacyAck && <p id="privacyAck-error" className="text-red-600 text-xs mt-1">{errors.privacyAck}</p>}
                      <ValidationError field="privacyAck" errors={formState.errors} className="text-red-600 text-xs mt-1" />
                    </div>
                    <button type="submit" disabled={formState.submitting} className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm">
                      {formState.submitting ? 'Sending…' : 'Send Enquiry →'}
                    </button>
                    <p className="text-xs text-charcoal/40 text-center">
                      Your details are used only to respond to this enquiry. Please review our Privacy Policy for more information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
