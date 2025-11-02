import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Blog - Latest in Web Development",
  description: "Stay updated with the latest trends in web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return { children };
}
