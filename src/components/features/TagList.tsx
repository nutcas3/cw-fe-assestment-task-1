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
    <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6">{title}</h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => handleTagClick(tag)}
            onKeyDown={(e) => e.key === 'Enter' && handleTagClick(tag)}
            tabIndex={0}
            role="button"
            aria-label={`Select tag ${tag}`}
            className="bg-gray-800/60 hover:bg-gray-700/80 text-white text-sm py-1 px-4 rounded-full transition-colors cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
