"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useCreateCommentMutation } from "@/graphql/generated/graphql";
import { commentSchema } from "@/lib/validation";

interface CommentFormProps {
  postId: string;
}

export function CommentForm({ postId }: CommentFormProps) {
  const [formData, setFormData] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [createComment, { loading }] = useCreateCommentMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = commentSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(
        validation.error.issues[0]?.message || "Please fill all fields",
        {
          duration: 3000,
          style: { background: "#F87171", color: "#fff" },
        }
      );
      return;
    }
    try {
      const { errors } = await createComment({
        variables: {
          data: {
            ...validation.data,
            post: postId,
            approved: false,
          },
        },
      });

      if (errors && errors.length > 0) {
        toast.error(errors[0].message || "Something went wrong ", {
          duration: 3000,
          style: { background: "#F87171", color: "#fff" },
        });
        return;
      }

      toast.success("Comment submitted successfully!", {
        duration: 3000,
        style: { background: "#34D399", color: "#fff" },
      });
      setFormData({ authorName: "", authorEmail: "", content: "" });
      setSubmitted(true);
    } catch (error: any) {
      const msg =
        error?.graphQLErrors?.[0]?.message ||
        error?.message ||
        "Failed to submit comment ";
      toast.error(msg, {
        duration: 3000,
        style: { background: "#F87171", color: "#fff" },
      });
      console.error(error);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 border rounded mb-6">
        <p className="text-green-600 font-semibold">
          Thank you! Your comment is awaiting approval.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 underline mt-2"
        >
          Submit another comment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded">
      <input
        type="text"
        placeholder="Your name"
        value={formData.authorName}
        onChange={(e) =>
          setFormData({ ...formData, authorName: e.target.value })
        }
        className="w-full border rounded px-3 py-2"
        disabled={loading}
        required
      />
      <input
        type="email"
        placeholder="Your email"
        value={formData.authorEmail}
        onChange={(e) =>
          setFormData({ ...formData, authorEmail: e.target.value })
        }
        className="w-full border rounded px-3 py-2"
        disabled={loading}
        required
      />
      <textarea
        placeholder="Write your comment..."
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="w-full border rounded px-3 py-2"
        rows={4}
        disabled={loading}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-70"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  );
}
