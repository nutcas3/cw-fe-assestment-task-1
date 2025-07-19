import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
}

export function TagList({ title, tags }: TagListProps) {
  return (
    <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6">{title}</h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800/60 hover:bg-gray-700/80 text-white text-sm py-1 px-4 rounded-full transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
