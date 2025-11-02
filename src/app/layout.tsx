import "./globals.css";
import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/graghql/apollo-wrapper";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A modern blog built with Next.js and Strapi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`font-sans antialiased`}>
        <ApolloWrapper>
          <ThemeProviderWrapper>
            <Header />
            {children}
            <Toaster />
          </ThemeProviderWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
