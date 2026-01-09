# Sentinel - Fake Door Landing Page

A Next.js landing page for Sentinel, a brand impersonation monitoring solution.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
fake_door/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── ValueProp.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── FormModal.tsx
│   └── Footer.tsx
├── hooks/
│   └── useModal.tsx     # Modal state management
└── lib/
    └── analytics.ts     # Event tracking utilities
```

## Features

- ✅ Single-page landing page with all required sections
- ✅ Fake Door form modal with validation
- ✅ Event tracking hooks for analytics
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Modern React with Next.js 14 App Router

## Event Tracking

The project includes event tracking functions that can be connected to analytics services like Google Analytics or Mixpanel. Events tracked include:

- `page_view`
- `cta_click_primary`
- `cta_click_secondary`
- `cta_click_pricing_tier`
- `form_start`
- `form_submit`
- `budget_selected`
- `role_selected`
- `time_to_launch_selected`

## Build for Production

```bash
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)