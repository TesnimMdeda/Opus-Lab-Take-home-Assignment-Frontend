import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
