import { NextResponse } from "next/server";
import { getServerApolloClient } from "@/graphql/apollo-server-client";
import { GetPostsDocument, Post } from "@/graphql/generated/graphql";
import { SITE_URL } from "@/lib/utils";
import RSS from "rss";

async function fetchPosts() {
  const client = getServerApolloClient();

  const { data } = await client.query({
    query: GetPostsDocument,
    variables: { pagination: { limit: 20 }, sort: ["publishedAt:desc"] },
  });

  return data?.posts ?? [];
}

export async function GET() {
  const posts = await fetchPosts();

  const feed = new RSS({
    title: "Your Blog Title",
    description: "Your blog description",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    language: "en",
    pubDate: new Date(),
  });

  posts.forEach((post: Post) => {
    feed.item({
      title: post.title,
      description: post.content || "",
      url: `${SITE_URL}/posts/${post.slug}`,
      date: new Date(post.published_date as string),
      author: post.author?.name || "Unknown",
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
