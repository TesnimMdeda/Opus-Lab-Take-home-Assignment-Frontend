"use client";

import type React from "react";
import { useState } from "react";
import { useCreateNewsletterSubscriptionMutation } from "@/graphql/generated/graphql";
import { newsletterSchema } from "@/lib/validation";
import { toast } from "sonner";
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const [subscribe, { loading }] = useCreateNewsletterSubscriptionMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = newsletterSchema.safeParse({ email });

    if (!validationResult.success) {
      const msg = validationResult.error.issues[0].message;
      toast.error(msg, {
        duration: 3000,
        style: { background: "#F87171", color: "#fff" },
      });
      return;
    }

    setError("");

    try {
      await subscribe({
        variables: { data: { email: validationResult.data.email } },
      });

      setSubmitted(true);
      setEmail("");

      toast.success("Thank you for subscribing!", {
        duration: 3000,
        style: { background: "#34D399", color: "#fff" },
      });
    } catch (err) {
      console.error("Error subscribing:", err);
      const msg = "Failed to subscribe. You may already be subscribed.";
      toast.error(msg, {
        duration: 3000,
        style: { background: "#F87171", color: "#fff" },
      });
    }
  };

  if (submitted) {
    return (
      <div className="p-4 border rounded bg-green-100 text-green-700">
        <button
          onClick={() => setSubmitted(false)}
          className="text-green-600 underline mt-2"
        >
          Subscribe another email ?
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 items-center"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {error && (
        <p className="text-red-500 text-sm w-full sm:w-auto">{error}</p>
      )}
    </form>
  );
}
