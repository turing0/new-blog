Based on the blog repository of [Lee Robinson](https://leerob.io)

# heykapil.in

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [Contentlayer](https://github.com/contentlayerdev/contentlayer)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)


## Overview

- `data/*` - MDX data that is used for blogs and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://heykapil.in/dashboard), guestbook, and post views, likes.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/dashboard` - [Personal dashboard](https://heykapil.in/dashboard) tracking metrics.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.

```bash
$ git clone https://github.com/heykapil/new-blog.git
$ cd new-blog
$ pnpm install
$ pnpm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/heykapil/new-blog/blob/main/.env.example).

