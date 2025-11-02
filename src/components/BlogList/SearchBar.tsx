"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        placeholder="Search by title, content, author, or tag..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-1/2 pl-10 bg-card border-border"
        aria-label="Search posts"
      />
    </div>
  );
}
