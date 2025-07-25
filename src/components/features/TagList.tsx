import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";

interface TagListProps {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

export function TagList({ title, tags, onTagClick = () => {} }: TagListProps) {
  const handleTagClick = useCallback((tag: string) => {
    onTagClick(tag);
  }, [onTagClick]);
  return (
    <section 
      className="py-6 px-4 max-w-7xl mx-auto"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
    >
      <h2 
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
        className="text-xl font-semibold text-white mb-4"
      >
        {title}
      </h2>
      <div 
        className="flex flex-wrap gap-2"
        role="list"
        aria-label={`${title} tags`}
      >
        {tags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => handleTagClick(tag)}
            onKeyDown={(e) => {
              // Support both Enter and Space for activation
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTagClick(tag);
              }
            }}
            tabIndex={0}
            role="listitem"
            aria-label={`Select tag ${tag}`}
            className="bg-[#293038] text-[#9EABB8] font-medium text-sm px-4 py-1 rounded-md transition-colors cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
