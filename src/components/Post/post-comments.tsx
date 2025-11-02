import type { Post } from "@/graphql/generated/graphql";
import { CommentForm } from "./CommentForm";

interface PostCommentsProps {
  post: Post;
}

export function PostComments({ post }: PostCommentsProps) {
  const approvedComments = post.comments?.filter((c) => c?.approved) || [];

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">
        Comments ({approvedComments.length})
      </h2>

      <div className="space-y-6 mb-8">
        {approvedComments.length === 0 ? (
          <p className="text-muted-foreground italic">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          approvedComments.map((comment, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-foreground">
                  {comment?.authorName || "Anonymous"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {comment?.createdAt
                    ? new Date(comment.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
              <p className="text-foreground leading-relaxed">
                {comment?.content}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Leave a Comment
        </h3>
        <CommentForm postId={post.documentId} />
      </div>
    </section>
  );
}
