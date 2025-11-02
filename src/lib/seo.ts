import { Metadata } from "next";
import { Author, Category, Post, Tag } from "@/graphql/generated/graphql";
import { SITE_URL, STRAPI_URL } from "./utils";

function generateDescription(content: string, maxLength: number = 160): string {
  const text = content.replace(/<[^>]*>/g, "");
  return text.length > maxLength
    ? text.substring(0, maxLength).trim() + "..."
    : text;
}

export function generatePostMetadata(post: Post): Metadata {
  const url = `${SITE_URL}/posts/${post.slug}`;
  const imageUrl = post.coverImage?.url
    ? `${STRAPI_URL}${post.coverImage.url}`
    : `${SITE_URL}/og-default.jpg`;

  const description = generateDescription(post.content);
  const authorName = post.author?.name || "Unknown Author";
  const publishedTime =
    post.published_date ?? post.publishedAt
      ? String(post.published_date ?? post.publishedAt)
      : undefined;

  return {
    title: post.title,
    description,
    authors: [{ name: authorName }],
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      publishedTime,
      authors: [authorName],
      images: [
        {
          url: imageUrl,
          alt: post.coverImage?.alternativeText || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  };
}

export function generateCategoryMetadata(category: Category): Metadata {
  const url = `${SITE_URL}/categories/${category.slug}`;
  const description =
    category.description || `Browse posts in ${category.name}`;

  return {
    title: category.name,
    description,
    openGraph: {
      title: category.name,
      description,
      url,
      type: "website",
    },
  };
}

export function generateTagMetadata(tag: Tag): Metadata {
  const url = `${SITE_URL}/tags/${tag.slug}`;
  const description = `Posts tagged with ${tag.name}`;

  return {
    title: tag.name,
    description,
    openGraph: {
      title: tag.name,
      description,
      url,
      type: "website",
    },
  };
}

export function generateAuthorMetadata(author: Author): Metadata {
  const url = `${SITE_URL}/authors/${author.slug}`;
  const description = author.bio || `Posts by ${author.name}`;
  const imageUrl = author.avatar?.url
    ? `${STRAPI_URL}${author.avatar.url}`
    : undefined;

  return {
    title: author.name,
    description,
    openGraph: {
      title: author.name,
      description,
      url,
      type: "profile",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}
