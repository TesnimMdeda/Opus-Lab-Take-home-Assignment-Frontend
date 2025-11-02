import type { Post } from "@/graphql/generated/graphql";
import { STRAPI_URL } from "@/lib/utils";

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold mb-6 text-foreground leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            {post.author?.avatar?.url ? (
              <img
                src={`${STRAPI_URL}${post.author.avatar.url}`}
                alt={post.author.name || "Author Avatar"}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                {post.author?.name?.charAt(0).toUpperCase() || "A"}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-foreground">
              {post.author?.name || "Anonymous"}
            </p>
            <p className="text-xs text-muted-foreground">
              {post.published_date
                ? new Date(post.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date"}
            </p>
          </div>
        </div>
        {post.category && (
          <div className="ml-auto px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {post.category.name}
          </div>
        )}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag?.slug}
              className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              #{tag?.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
