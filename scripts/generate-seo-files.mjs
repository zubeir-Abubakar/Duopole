import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function readSiteUrl() {
  const fromProcess = process.env.VITE_SITE_URL || process.env.SITE_URL
  if (fromProcess) return fromProcess.trim().replace(/^['"]|['"]$/g, '')

  for (const file of ['.env.production', '.env']) {
    if (!existsSync(file)) continue
    const contents = readFileSync(file, 'utf8')
    const match = contents.match(/^\s*VITE_SITE_URL\s*=\s*(.*?)\s*$/m)
    if (match?.[1]) return match[1].trim().replace(/^['"]|['"]$/g, '')
  }

  return ''
}

const configuredSiteUrl = readSiteUrl()
let origin = ''

if (configuredSiteUrl) {
  let parsedUrl
  try {
    parsedUrl = new URL(configuredSiteUrl)
  } catch {
    throw new Error('VITE_SITE_URL must be an absolute HTTPS URL, such as https://www.example.com')
  }
  if (parsedUrl.protocol !== 'https:' || parsedUrl.username || parsedUrl.password) {
    throw new Error('VITE_SITE_URL must use HTTPS and must not contain credentials.')
  }
  origin = parsedUrl.origin
}

const routes = ['/', '/about', '/products', '/partnerships', '/contact', '/privacy']
const sitemap = origin
  ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>\n`
  : `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <!-- Set VITE_SITE_URL to the verified production HTTPS domain to populate this sitemap. -->\n</urlset>\n`
const robots = origin
  ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
  : 'User-agent: *\nAllow: /\n\n# Set VITE_SITE_URL to the verified production HTTPS domain to add the sitemap URL.\n'

writeFileSync(resolve('dist/sitemap.xml'), sitemap)
writeFileSync(resolve('dist/robots.txt'), robots)
console.log(origin ? `Generated sitemap and robots.txt for ${origin}` : 'Built site without a production domain; sitemap will be populated when VITE_SITE_URL is set.')
