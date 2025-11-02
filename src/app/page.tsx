"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Post, useGetPostsQuery } from "@/graphql/generated/graphql";
import { NewsletterForm } from "@/components/BlogList/NewsletterForm";
import { BlogList } from "@/components/BlogList/BlogList";
import { SearchBar } from "@/components/BlogList/SearchBar";
import { Pagination } from "@/components/BlogList/pagination";
import { FilterPanel } from "@/components/BlogList/filter-panel";
import { CategoryFilter } from "@/components/BlogList/category-filter";

const POSTS_PER_PAGE = 6;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const { data, loading, error } = useGetPostsQuery({
    variables: { pagination: { limit: 100 }, sort: ["published_date:desc"] },
  });

  const posts = data?.posts as Post[];

  console.log("posts", posts);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, 300);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  const authors = useMemo(() => {
    const uniqueAuthors = new Map();
    posts?.forEach((post) => {
      if (post?.author) {
        uniqueAuthors.set(post.author.documentId, {
          documentId: post.author.documentId,
          name: post.author.name || "Unknown",
          slug: post.author.slug || "",
        });
      }
    });
    return Array.from(uniqueAuthors.values());
  }, [posts]);

  const categories = useMemo(() => {
    const uniqueCategories = new Map();
    posts?.forEach((post) => {
      if (post?.category) {
        uniqueCategories.set(post.category.documentId, {
          documentId: post.category.documentId,
          name: post.category.name || "Unknown",
          slug: post.category.slug || "",
        });
      }
    });
    return Array.from(uniqueCategories.values());
  }, [posts]);

  const filteredPosts =
    useMemo(() => {
      return posts?.filter((post) => {
        const query = debouncedQuery.toLowerCase();
        const matchesSearch =
          post?.title?.toLowerCase().includes(query) ||
          post?.content?.toLowerCase().includes(query) ||
          post?.author?.name?.toLowerCase().includes(query) ||
          post?.category?.name?.toLowerCase().includes(query) ||
          post?.tags.some((tag) => tag?.name.toLowerCase().includes(query));

        const matchesAuthor =
          selectedAuthors.length === 0 ||
          (post?.author && selectedAuthors.includes(post.author.documentId));

        const matchesCategory =
          selectedCategory === null ||
          (post?.category && post.category.documentId === selectedCategory);

        return matchesSearch && matchesAuthor && matchesCategory;
      });
    }, [posts, debouncedQuery, selectedAuthors, selectedCategory]) || [];

  const totalPages = Math.ceil(filteredPosts?.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts?.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const calculateReadingTime = (content?: string) => {
    if (!content) return 0;
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) return <p className="text-center py-8">Loading posts...</p>;
  if (error)
    return (
      <p className="text-center py-8 text-destructive">
        Error: {error.message}
      </p>
    );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              Latest Stories
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Discover insights, ideas, and inspiration from our community of
              writers and experts.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-6 lg:order-1">
            <FilterPanel
              authors={authors}
              selectedAuthors={selectedAuthors}
              onAuthorChange={setSelectedAuthors}
              loading={loading}
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              loading={loading}
            />
          </aside>

          <section className="lg:col-span-3 lg:order-2">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <BlogList
              posts={paginatedPosts}
              calculateReadingTime={calculateReadingTime}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <p className="text-sm text-muted-foreground text-center">
              Showing {startIndex + 1}-
              {Math.min(startIndex + POSTS_PER_PAGE, filteredPosts?.length)} of{" "}
              {filteredPosts?.length} posts
            </p>
          </section>
        </div>
      </main>

      <section className="border-t border-border bg-card mt-16">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-balance">
                Subscribe to our newsletter and get the latest posts delivered
                straight to your inbox. No spam, just great content.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
