import Image from "next/image";
import type { Post } from "@/graphql/generated/graphql";
import { STRAPI_URL } from "@/lib/utils";

interface PostCoverImageProps {
  post: Post;
}

export function PostCoverImage({ post }: PostCoverImageProps) {
  const coverUrl = post.coverImage?.url;
  const imageUrl = coverUrl ? `${STRAPI_URL}${coverUrl}` : "/placeholder.png";

  return (
    <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={
          imageUrl ||
          "/placeholder.svg?height=400&width=1200&query=blog-post-cover"
        }
        alt={post.coverImage?.alternativeText || "Post cover image"}
        fill
        className="object-cover"
      />
    </div>
  );
}
