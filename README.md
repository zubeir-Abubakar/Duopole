# Duopole Fresh Imports

Responsive React, TypeScript and Tailwind business website for Duopole Fresh Imports. The site presents the business as developing its fresh-produce market network; it does not claim confirmed stock, shipments, suppliers, customers or certifications.

## Local development

1. Install Node.js (LTS) and npm.
2. Run `npm install`.
3. The verified domain is configured in `.env.production`; add the form endpoint there after selecting and verifying a provider.
4. Run `npm run dev` to work locally.
5. Run `npm run build` to compile and validate the production site.
6. Run `npm run preview` to inspect the production build locally.

## Before launch

- The supplied contact information is configured in `src/config/business.ts`: Abubakar Towfiq, +41 79 368 05 70, duopole.imports@gmail.com, Lausanne, Switzerland.
- The intended domain `https://dupoleimports.com` is configured for SEO and deployment output. This configuration does not mean the domain is connected or that the site is live. Verify DNS, TLS, hosting and route fallback before launch.
- Connect `VITE_CONTACT_FORM_ENDPOINT` to a trusted service or server endpoint. The site defaults to demonstration mode, never claims to send a form when no endpoint is configured, and does not store demo submissions. Test successful and failed requests before launch.
- Configure server/provider-side validation, spam prevention, access controls, data retention and any required data-processing terms. The client-side honeypot is only a basic spam signal, not a substitute for server protection.
- Review `src/pages/Privacy.tsx` against the real legal entity, jurisdiction, hosting and form provider, actual cookies/logging, retention period and applicable law. Obtain appropriate legal review; the draft is not a certification or legal advice.
- The uploaded logo at `public/logo.jpg` is used in the shared header and footer and as the favicon/share image.
- The provided produce photos are currently visible in the conversation but are not available as files under `public/`. Add them there with the expected filenames to replace the explicit local-asset fallbacks. The screenshot divider expects `Screenshot 2026-10-21 at 12.44.17.png`.
- Add the website's production URL to the hosting provider and verify SPA route fallback behavior for `/about`, `/products`, `/partnerships`, `/contact` and `/privacy`.

## Remaining owner / launch confirmations

1. Confirm DNS and hosting are configured for the intended domain and that HTTPS works.
2. Responsible legal entity and jurisdiction, if applicable.
3. Chosen contact form provider/endpoint, processing terms, data location and retention period.
4. Hosting provider's cookie, access-log and retention behavior.
5. Add the attached/generation image files to `public/` using the integrated filenames.

## Business contact configuration

Owner contact details live in `src/config/business.ts`. Legal entity details and form provider configuration remain intentionally unset until confirmed. The WhatsApp link uses the supplied owner number.
