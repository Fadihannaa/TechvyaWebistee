// Single source of truth for company details.
// TODO: Replace every PLACEHOLDER with real values.
export const site = {
  name: 'Techvya',
  tagline: 'ERP Expertise. Digital Solutions.',
  domain: 'https://www.PLACEHOLDER-techvya.com', // TODO: set production domain
  locationShort: 'Lebanon · Working remotely worldwide',
  locationLong: 'Based in Lebanon, serving local and international clients remotely.', // TODO: add city if desired. Do not invent street address.
  email: 'info@PLACEHOLDER-techvya.com', // TODO: set real inbox, e.g. info@techvya.com
  phoneDisplay: '+961 PLACEHOLDER', // TODO: set real phone
  phoneHref: 'tel:+961000000000', // TODO: set real tel: link
  whatsapp: 'https://wa.me/961000000000', // TODO: set real WhatsApp link
  linkedin: 'https://www.linkedin.com/company/PLACEHOLDER', // TODO: set real LinkedIn URL
  bookingUrl: '#', // TODO: set Calendly/Cal.com link, e.g. https://cal.com/techvya/intro
  formEndpoint: '', // TODO: set API endpoint, e.g. https://api.techvya.com/contact or Formspree URL. See README + .env. Empty = form shows configuration notice, never fake success.
  ogImage: '/og-cover.svg',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/dynamics-365', label: 'Dynamics 365' },
  { to: '/digital-solutions', label: 'Digital Solutions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const serviceOptions = [
  'Dynamics 365 Support',
  'D365 Customization or Report',
  'Integration or API',
  'Website Development',
  'Web Application',
  'Ongoing Support',
  'Freelance or Subcontracting',
  'Other',
] as const
