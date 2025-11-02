import { Post } from "@/graphql/generated/graphql";
import { STRAPI_URL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogListProps {
  posts: Array<Post | null> | undefined;
  calculateReadingTime: (content?: string) => number;
}

export function BlogList({ posts, calculateReadingTime }: BlogListProps) {
  if (posts?.length === 0)
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No posts found matching your filters.
        </p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {posts?.map((post) => {
        const coverUrl = post?.coverImage?.url;
        const imageUrl = coverUrl
          ? `${STRAPI_URL}${coverUrl}`
          : "/blog-post-cover.png";

        const readingTime = calculateReadingTime(post?.content);

        return (
          <Link
            key={post?.documentId}
            href={`/posts/${post?.slug}`}
            className="group flex flex-col h-full rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden bg-muted">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={post?.coverImage?.alternativeText || "Post cover image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col">
              <h2 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post?.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {post?.author?.name} •{" "}
                {post?.published_date
                  ? new Date(post.published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "No date"}
              </p>
              <div className="flex justify-between items-center pt-3 border-t border-border">
                {post?.category && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    {post.category.name}
                  </span>
                )}
                {readingTime > 0 && (
                  <span className="text-xs text-muted-foreground font-medium">
                    {readingTime} min read
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
