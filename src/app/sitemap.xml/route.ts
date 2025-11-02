import { NextResponse } from "next/server";
import { getServerApolloClient } from "@/graphql/apollo-server-client";
import {
  GetPostsDocument,
  GetCategoriesDocument,
  GetTagsDocument,
} from "@/graphql/generated/graphql";
import { SITE_URL } from "@/lib/utils";

export async function GET() {
  const client = getServerApolloClient();

  const { data: postsData } = await client.query({
    query: GetPostsDocument,
    variables: { pagination: { limit: 100 }, sort: ["published_date:desc"] },
  });

  const { data: categoriesData } = await client.query({
    query: GetCategoriesDocument,
  });

  const { data: tagsData } = await client.query({
    query: GetTagsDocument,
  });

  const posts = postsData?.posts ?? [];
  const categories = categoriesData?.categories ?? [];
  const tags = tagsData?.tags ?? [];

  const urls = [
    {
      url: SITE_URL,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    ...posts.map((post: any) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastmod: post.updatedAt
        ? new Date(post.updatedAt).toISOString()
        : new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    })),
    ...categories.map((cat: any) => ({
      url: `${SITE_URL}/categories/${cat.slug}`,
      lastmod: cat.updatedAt
        ? new Date(cat.updatedAt).toISOString()
        : new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.6,
    })),
    ...tags.map((tag: any) => ({
      url: `${SITE_URL}/tags/${tag.slug}`,
      lastmod: tag.updatedAt
        ? new Date(tag.updatedAt).toISOString()
        : new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.5,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `
  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
