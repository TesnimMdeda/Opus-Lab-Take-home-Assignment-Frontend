import { Metadata } from "next";
import { generatePostMetadata } from "@/lib/seo";
import { GetPostBySlugDocument } from "@/graphql/generated/graphql";
import { print } from "graphql";
import PostPageClient from "./page-client";
import { STRAPI_TOKEN, STRAPI_URL } from "@/lib/utils";

async function fetchPostBySlug(slug: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      },
      body: JSON.stringify({
        query: print(GetPostBySlugDocument),
        variables: { slug },
      }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      return null;
    }

    return result.data?.posts?.[0];
  } catch (error) {
    console.error("Error in fetchPostBySlug:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return generatePostMetadata(post);
}

export default function PostPage() {
  return <PostPageClient />;
}
