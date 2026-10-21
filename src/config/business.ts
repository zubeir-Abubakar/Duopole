export const businessDetails = {
  email: 'duopole.imports@gmail.com',
  whatsappNumber: '+41 79 368 05 70',
  contactPerson: 'Abubakar Towfiq',
  privacyEmail: 'duopole.imports@gmail.com',
  legalEntity: '',
  publicLocation: 'Lausanne, Switzerland',
  domain: 'https://dupoleimports.com',
} as const

export const displayOrPlaceholder = (value: string, placeholder: string) =>
  value.trim() || placeholder

export const whatsappHref = () => 'https://wa.me/41793680570'
export const emailHref = () => `mailto:${businessDetails.email}`
