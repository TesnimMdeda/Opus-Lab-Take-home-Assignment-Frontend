import { Category } from "@/graphql/generated/graphql";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  loading?: boolean;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  loading = false,
}: CategoryFilterProps) {
  return (
    <div className="bg-background rounded-md border border-border shadow-sm overflow-hidden">
      <div className="px-4 py-5">
        <h2 className="text-lg font-bold text-foreground">
          Browse By Categories
        </h2>
      </div>

      <div className="p-4">
        <div className="space-y-0 border-l-4 border-gray-500 pl-4">
          <button
            onClick={() => onCategoryChange(null)}
            disabled={loading}
            className={`block w-full text-left py-2 px-0 text-base transition-colors disabled:opacity-50 ${
              selectedCategory === null
                ? "font-bold text-foreground"
                : "font-normal text-muted-foreground hover:text-foreground"
            }`}
          >
            All Category
          </button>

          {categories.length === 0 ? (
            <p className="text-sm text-muted-foreground py-2">
              No categories available
            </p>
          ) : (
            categories.map((category) => (
              <button
                key={category.documentId}
                onClick={() => onCategoryChange(category.documentId)}
                disabled={loading}
                className={`block w-full text-left py-2 px-0 text-base transition-colors disabled:opacity-50 ${
                  selectedCategory === category.documentId
                    ? "font-bold text-foreground"
                    : "font-normal text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
