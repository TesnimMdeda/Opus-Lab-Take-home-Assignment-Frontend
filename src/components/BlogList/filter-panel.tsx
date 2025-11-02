"use client";

import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterOption {
  documentId: string;
  name: string;
  slug: string;
}

interface FilterPanelProps {
  authors: FilterOption[];
  selectedAuthors: string[];
  onAuthorChange: (authorIds: string[]) => void;
  loading?: boolean;
}

export function FilterPanel({
  authors,
  selectedAuthors,
  onAuthorChange,
  loading = false,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedAuthor =
    selectedAuthors.length > 0
      ? authors.find((a) => a.documentId === selectedAuthors[0])
      : null;

  const handleSelect = (authorId: string) => {
    onAuthorChange([authorId]);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    onAuthorChange([]);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            disabled={loading}
            className="w-full flex items-center gap-2 px-4 py-3 bg-background border border-border rounded-md text-muted-foreground hover:border-gray-300 transition-colors disabled:opacity-50"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm flex-1 text-left">
              {selectedAuthor ? selectedAuthor.name : "Filter By Author..."}
            </span>
            {selectedAuthor ? (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleClear();
                }}
                className="hover:bg-muted rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </span>
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <div className="p-3 border-b border-border">
            <input
              type="text"
              placeholder="Search authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-gray-400 bg-card"
              disabled={loading}
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredAuthors.map((author) => (
              <button
                key={author.documentId}
                onClick={() => handleSelect(author.documentId)}
                disabled={loading}
                className="w-full text-left px-4 py-2 hover:bg-muted text-sm text-muted-foreground disabled:opacity-50"
              >
                {author.name}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
