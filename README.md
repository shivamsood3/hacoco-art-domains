# Hacoco Art Domains

Single Next.js codebase that renders three distinct art-acquisition landing pages by hostname:

- `hacococapital.com`
- `investwithhacoco.com`
- `hacoco-advisory.com`

## File Structure

```text
hacoco-art-domains/
├── .env.example
├── .gitignore
├── README.md
├── eslint.config.mjs
├── middleware.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── src
    ├── app
    │   ├── api
    │   │   └── leads
    │   │       └── route.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── analytics-provider.tsx
    │   ├── lead-form.tsx
    │   └── site-renderer.tsx
    └── lib
        ├── analytics.ts
        ├── hostname.ts
        ├── leads.ts
        ├── resend.ts
        └── site-config.ts
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_CAPITAL_TO`
- `RESEND_INVESTOR_TO`
- `RESEND_ADVISORY_TO`
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
127.0.0.1 hacoco-advisory.local
```

Then open:

- `http://hacococapital.local:3000`
- `http://investwithhacoco.local:3000`
- `http://hacoco-advisory.local:3000`

Each host resolves to a different config object through `middleware.ts` and `src/lib/site-config.ts`.

## How Domain Mapping Works

- `middleware.ts` reads the request `host` and forwards it as `x-site-hostname`.
- `src/lib/hostname.ts` normalizes the hostname.
- `src/lib/site-config.ts` returns the correct config object.
- `src/app/page.tsx` renders the shared renderer with the matched config.

This keeps all domains inside one Next.js deployment.

## Lead Handling

Form submissions go to `src/app/api/leads/route.ts`.

The API route:

1. Validates the payload.
2. Includes `domain` and `leadTag`.
3. Sends an email through Resend.
4. Logs the same lead to a Google Sheets webhook.

Routing:

- `CAP-LEAD` -> `capital@hacococapital.com`
- `INV-LEAD` -> `hello@investwithhacoco.com`
- `ADV-LEAD` -> `advisory@hacoco-advisory.com`

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Add all environment variables in the Vercel project settings.
4. Deploy once to get the production URL.
5. In the Vercel project, add these custom domains:
   - `hacococapital.com`
   - `www.hacococapital.com`
   - `investwithhacoco.com`
   - `www.investwithhacoco.com`
   - `hacoco-advisory.com`
   - `www.hacoco-advisory.com`
6. Update DNS for each domain to the Vercel target shown in the dashboard.
7. Keep all six domains attached to the same Vercel project.

Because the code reads the hostname at runtime, one deployment serves all three branded pages.

## Notes

- The page system is intentionally config-driven.
- Only art-focused language is used.
- No fake testimonials are included.
- Artwork URLs are static references, not scraped at runtime.
