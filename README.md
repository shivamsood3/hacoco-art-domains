# Hacoco Multi Domain Landing Pages

Single Next.js codebase that renders three distinct landing pages by hostname.

- `hacococapital.com`: private real estate capital access
- `investwithhacoco.com`: South Delhi real estate buyer conversion and SEO blog
- `hacocoadvisory.com`: private art advisory and bespoke sourcing

## File Structure

```text
hacoco-art-domains/
├── .env.example
├── README.md
├── middleware.ts
├── next.config.ts
├── package.json
├── src
│   ├── app
│   │   ├── api/leads/route.ts
│   │   ├── blog
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── analytics-provider.tsx
│   │   ├── lead-form.tsx
│   │   └── site-renderer.tsx
│   └── lib
│       ├── analytics.ts
│       ├── blog.ts
│       ├── hostname.ts
│       ├── leads.ts
│       ├── resend.ts
│       └── site-config.ts
```

## Domain Mapping

- `hacococapital.com` uses the Hacoco Capital real estate capital config.
- `investwithhacoco.com` uses the South Delhi real estate conversion config.
- `hacocoadvisory.com` uses the Hacoco Advisory art config.

All three domains should point to the same deployment. The app reads the hostname at runtime and renders the matching config from `src/lib/site-config.ts`.

## Routes

- `/` renders the correct landing page for the current hostname.
- `/terms` renders domain aware Terms of Use.
- `/privacy` renders domain aware Privacy Policy.
- `/blog` renders only on `investwithhacoco.com`.
- `/blog/[slug]` renders South Delhi real estate articles only on `investwithhacoco.com`.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_CAPITAL_TO=advisory@hacococapital.com`
- `RESEND_INVESTOR_TO=shiv@hacococapital.com`
- `RESEND_ADVISORY_TO=shiv@hacocoadvisory.com`
- `GOOGLE_SHEETS_WEBHOOK_URL`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`

## Local Setup

1. `cd /Users/shivamsood/hacoco-art-domains`
2. `npm install`
3. `cp .env.example .env.local`
4. Fill in the environment variables.
5. `npm run dev`

## Local Hostname Routing Test

Add these entries to `/etc/hosts`:

```text
127.0.0.1 hacococapital.local
127.0.0.1 investwithhacoco.local
127.0.0.1 hacocoadvisory.local
```

Then open:

- `http://hacococapital.local:3000`
- `http://investwithhacoco.local:3000`
- `http://investwithhacoco.local:3000/blog`
- `http://hacocoadvisory.local:3000`

## Lead Handling

Form submissions go to `src/app/api/leads/route.ts`.

The API route:

1. Validates the payload.
2. Includes `domain` and `leadTag`.
3. Sends an email through Resend.
4. Logs the same lead to a Google Sheets webhook when configured.

Email routing:

- `CAP-LEAD` goes to `advisory@hacococapital.com`
- `INV-LEAD` goes to `shiv@hacococapital.com`
- `ADV-LEAD` goes to `shiv@hacocoadvisory.com`

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repo into one Vercel project.
3. Add all environment variables in the Vercel project settings.
4. Add all production domains to that same project.
5. Update DNS for each domain to the Vercel target shown in the dashboard.

Because the code reads the hostname at runtime, one deployment serves all three websites.

## Notes

- The page system is config driven.
- Two sites now focus on real estate.
- One site remains focused on art advisory.
- No fake testimonials are included.
- Art images are static references from Hacoco sources.
