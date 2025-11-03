# 🧭 Next.js Blog Frontend — Powered by Strapi GraphQL

A modern **Next.js (App Router, TypeScript)** frontend connected to a **Strapi CMS backend**.  
Includes GraphQL (Apollo Client), typed data fetching, SEO setup, and full content publishing flow.

---

## 📊 Architecture Overview


```
┌─────────────────────┐
│  User visits site   │
└──────────┬──────────┘
           │ Serve fresh content
           ↓
┌─────────────────────┐
│  Next.js Frontend   │◄────── Fetch content via GraphQL
└─────┬───────────┬───┘
      │           │ GraphQL API Response
      ↓           ↓
┌─────────────────────┐
│     Strapi CMS      │
└──────────┬──────────┘
           │ Publish / Update / Unpublish
           ↓
┌─────────────────────┐
│   Strapi Webhook    │
└──────────┬──────────┘
           │ Triggers revalidation
           ↓
┌─────────────────────────────┐
│  Next.js API Route          │
│  /api/revalidate            │
└──────────┬──────────────────┘
           │
           └──► Regenerates static pages
```

**Content Flow:**
1. 👤 User visits the site → Next.js serves fresh content
2. 🔄 Next.js fetches content from Strapi via GraphQL
3. ✏️ Content creators publish/update content in Strapi CMS
4. 🔔 Strapi webhook triggers revalidation
5. ⚡ Next.js API route regenerates static pages
6. ✅ Users see updated content immediately

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2️⃣ Set up environment variables

Create a `.env` file at the root of your project using the following template:

```env
# 🌐 Strapi Backend URLs
NEXT_PUBLIC_STRAPI_API_URL=https://opus-production-3e99.up.railway.app
NEXT_PUBLIC_STRAPI_GRAPHQL_URL=https://opus-production-3e99.up.railway.app/graphql
NEXT_PUBLIC_SITE_URL=https://opus-lab-take-home-assignment-front-taupe.vercel.app

# 🔐 API & Webhook Secrets
NEXT_PUBLIC_STRAPI_API_TOKEN=your_strapi_api_token_here
NEXT_PUBLIC_REVALIDATE_SECRET=your_revalidate_secret_here
```

💡 **Tip:** Always commit a `.env.example` (not your real `.env`) for easy onboarding.

### 3️⃣ Generate GraphQL Types

To enable typed queries and mutations, run:

```bash
npm run codegen
```

This uses your `codegen.yml` (or `graphql-codegen.config.ts`) setup to:

- Fetch the GraphQL schema from Strapi
- Generate TypeScript definitions for queries, mutations, and fragments
- Update files in your `/graphql/` or `/generated/` folder

🧬 **Code generation ensures type safety and autocomplete in your IDE when writing GraphQL queries.**

### 4️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🌍 Hosted Links

| Resource | URL |
|----------|-----|
| 🏠 Frontend | [https://opus-lab-take-home-assignment-front-taupe.vercel.app](https://opus-lab-take-home-assignment-front-taupe.vercel.app) |
| ⚙️ Strapi Admin | [https://opus-production-3e99.up.railway.app/admin](https://opus-production-3e99.up.railway.app/admin) |
| 🗺️ Sitemap | `/sitemap.xml` |
| 📰 RSS Feed | `/rss.xml` |

---

## 🧠 Project Features

### 🏗️ Architecture

- Next.js App Router + TypeScript
- Apollo Client (GraphQL) with auto-generated types
- Zod for runtime validation and type safety

### 📰 Blog Features

- Home (latest posts)
- Post page (markdown + media)
- Category, Tag & Author pages
- Search and pagination
- Comment and Newsletter forms stored in Strapi

### 💌 Forms

- Built with React Hook Form + Zod
- Submits data to Strapi CMS

### ⚙️ Data Fetching

- GraphQL queries + mutations with typed responses
- Error & loading handling
- Optimized caching via Apollo

### 🧩 SEO & Metadata

- Dynamic meta & OG tags
- Auto-generated `sitemap.xml` and `rss.xml`

### ⚡ Performance & UX

- Optimized media with `next/image`
- Reading-time estimation
- Pagination & infinite scroll
- Dark Mode (Context or Zustand)
- ISR (Incremental Static Regeneration) + Strapi Webhooks

---

## 🧰 Technologies Used

| Category | Tools |
|----------|-------|
| Framework | Next.js |
| Language | TypeScript |
| CMS | Strapi |
| API | GraphQL + Apollo Client |
| Codegen | GraphQL Code Generator |
| Validation | Zod |
| Forms | React Hook Form |
| Styling | Tailwind CSS |
| State | Context / Zustand |
| Deployment | Vercel |

---

## 🛠️ Editing & Development Notes

You can start editing the main page by modifying:

```bash
app/page.tsx
```

The page auto-updates as you edit.

The project also uses `next/font` to automatically load **Geist** — a clean, modern Vercel font family.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Apollo Client Docs](https://www.apollographql.com/docs/react/)
- [GraphQL Codegen Docs](https://www.graphql-code-generator.com/)
- [Strapi GraphQL Plugin](https://docs.strapi.io/dev-docs/plugins/graphql)

---

## ☁️ Deployment

Deploy easily using **Vercel**, the creators of Next.js:

👉 [Deploy on Vercel](https://vercel.com/new)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and Strapi**
