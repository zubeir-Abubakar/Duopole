import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', heading: /connecting kenya.s fresh produce with the swiss market/i },
  { path: '/about', heading: /building connections across fresh-produce markets/i },
  { path: '/products', heading: /fresh produce opportunities/i },
  { path: '/partnerships', heading: /valuable fresh-produce partnerships/i },
  { path: '/contact', heading: /start a conversation/i },
  { path: '/privacy', heading: /privacy policy/i },
]

test.describe('Public website routes', () => {
  for (const route of routes) {
    test(`renders ${route.path}`, async ({ page }) => {
      await page.goto(route.path)
      await expect(page.locator('main h1')).toHaveText(route.heading)
      await expect(page).toHaveTitle(/Duopole Fresh Imports/i)
      await expect(page.getByRole('link', { name: 'Privacy Policy' }).first()).toBeVisible()
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
    })
  }

  test('shows the uploaded logo and working business contact actions', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header img[alt*="Duopole"]')).toHaveAttribute('src', '/logo.jpg')

    await page.goto('/contact')
    await expect(page.getByRole('link', { name: 'Send an email' })).toHaveAttribute('href', 'mailto:duopole.imports@gmail.com')
    await expect(page.getByRole('link', { name: 'Message on WhatsApp' })).toHaveAttribute('href', 'https://wa.me/41793680570')
    await expect(page.getByText(/Lausanne, Switzerland/).first()).toBeVisible()
    await expect(page.getByText('Abubakar Towfiq')).toBeVisible()
  })

  test('mobile navigation opens and closes after choosing a route', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This interaction is specific to the mobile navigation.')
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: 'Open navigation menu' })
    await menuButton.click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Products' }).click()
    await expect(page).toHaveURL(/\/products$/)
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeVisible()
  })

  test('product calls to action preselect the related contact enquiry', async ({ page }) => {
    await page.goto('/products')
    await page.getByRole('link', { name: /discuss kenyan avocados/i }).click()
    await expect(page).toHaveURL(/topic=avocados/)
    await expect(page.getByLabel('Enquiry Type *')).toHaveValue('buying-avocados')

    await page.goto('/products')
    await page.getByRole('link', { name: /register your interest/i }).click()
    await expect(page).toHaveURL(/topic=blueberries/)
    await expect(page.getByLabel('Enquiry Type *')).toHaveValue('blueberries')
    await expect(page.getByLabel('Message *')).toHaveValue(/potential blueberry partnership/i)
  })

  test('contact form reports required-field errors without claiming to send', async ({ page }) => {
    await page.goto('/contact')
    await page.getByRole('button', { name: /send enquiry/i }).click()
    await expect(page.getByRole('alert').first()).toContainText('review the highlighted fields')
    await expect(page.getByText('The contact form is not connected to a submission service yet.')).toBeVisible()
  })

  test('valid contact details produce a clearly labeled demo state when no endpoint is configured', async ({ page }) => {
    await page.goto('/contact')
    await page.getByLabel('Full Name *').fill('Playwright Buyer')
    await page.getByLabel('Company Name').fill('Example Produce Ltd')
    await page.getByLabel('Business Email *').fill('buyer@example.test')
    await page.getByLabel('Country *').fill('Switzerland')
    await page.getByLabel('Enquiry Type *').selectOption('buying-avocados')
    await page.getByLabel('Estimated volume / requirements').fill('Subject to confirmation')
    await page.getByLabel('Message *').fill('We would like to discuss Kenyan avocado sourcing requirements.')
    await page.getByLabel(/I have read and understood the/).check()
    await page.getByRole('button', { name: /send enquiry/i }).click()
    await expect(page.getByRole('heading', { name: 'Demonstration Mode' })).toBeVisible()
    await expect(page.getByText(/Nothing has been sent or stored/)).toBeVisible()
  })

  test('all local images load and layouts do not overflow horizontally', async ({ page }) => {
    for (const path of ['/', '/about', '/products', '/partnerships', '/contact']) {
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(path)
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)

      await page.locator('img[src^="/images/"], img[src="/logo.jpg"]').evaluateAll(async (images) => {
        await Promise.all(images.map(async (image) => {
          const element = image as HTMLImageElement
          element.loading = 'eager'
          await element.decode()
        }))
      })
      const localImageFailures = await page.locator('img[src^="/images/"], img[src="/logo.jpg"]').evaluateAll((images) =>
        images.filter((image) => (image as HTMLImageElement).naturalWidth === 0).map((image) => (image as HTMLImageElement).src),
      )
      expect(localImageFailures, `Broken local image on ${path}`).toEqual([])
      await expect(page.locator('[aria-label*="Image file missing"]')).toHaveCount(0)
    }
  })

  test('unknown routes render the not-found page', async ({ page }) => {
    await page.goto('/this-route-does-not-exist')
    await expect(page.getByRole('heading', { name: 'Page Not Found' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Back to Home' })).toHaveAttribute('href', '/')
  })
})
