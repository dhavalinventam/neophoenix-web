This is a Next.js 14 App Router project with TypeScript and SCSS modules. It includes:

- Poppins (headings) and Open Sans (body) via `next/font/google`
- SCSS modules and `src/styles/global.scss`
- Reusable `Header` and `Footer` components
- Pages: Home (hero), About, Contact (form)
- SEO metadata via App Router `metadata`
- Aliases: `@`, `@/components`, `@/styles`, `@/assets`
- ESLint + Prettier configuration

## Getting Started

Development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Global styles live in `src/styles/global.scss`. Component styles use `.module.scss`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
