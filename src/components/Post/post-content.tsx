import ReactMarkdown from "react-markdown";
import type { Post } from "@/graphql/generated/graphql";

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <div className="prose prose-lg mb-6 dark:prose-invert">
      <ReactMarkdown>{post.content || ""}</ReactMarkdown>
    </div>
  );
}
