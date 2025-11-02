import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export const commentSchema = z.object({
  authorName: z.string().min(2, "Name must be at least 2 characters"),
  authorEmail: z.email("Invalid email address"),
  content: z.string().min(5, "Comment must be at least 5 characters"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type CommentFormData = z.infer<typeof commentSchema>;
