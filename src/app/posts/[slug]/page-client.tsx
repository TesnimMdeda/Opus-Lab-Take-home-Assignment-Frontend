"use client";

import { useParams } from "next/navigation";
import { Post, useGetPostBySlugQuery } from "@/graphql/generated/graphql";
import { PostHeader } from "@/components/Post/post-header";
import { PostCoverImage } from "@/components/Post/post-cover-image";
import { PostContent } from "@/components/Post/post-content";
import { PostComments } from "@/components/Post/post-comments";

export default function PostPageClient() {
  const params = useParams();
  const slug = params.slug as string;

  const { data, loading, error } = useGetPostBySlugQuery({
    variables: { slug },
  });

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data?.posts?.[0] as Post;
  if (!post) return <p>Post not found</p>;

  return (
    <article className="container mx-auto p-4">
      <PostHeader post={post} />
      <PostCoverImage post={post} />
      <PostContent post={post} />
      <PostComments post={post} />
    </article>
  );
}
