import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const pageTitle = title.startsWith('Duopole Fresh Imports')
      ? title
      : `${title} | Duopole Fresh Imports`
    document.title = pageTitle

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    descriptionTag?.setAttribute('content', description)

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    ogTitle?.setAttribute('content', pageTitle)

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    ogDescription?.setAttribute('content', description)

    const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
    const canonicalUrl = `${configuredOrigin || window.location.origin}${window.location.pathname}`
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.append(canonicalLink)
    }
    canonicalLink.href = canonicalUrl
  }, [description, title])

  return null
}
