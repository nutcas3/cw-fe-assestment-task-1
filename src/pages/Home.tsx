import { Header } from "@/components/features/Header";
import { HeroSearch } from "@/components/features/HeroSearch";
import { TagList } from "@/components/features/TagList";

// Static data moved outside component to prevent recreation on each render
const TRENDING_TAGS = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
];

export function Home() {

  const handleTagClick = (tag: string) => {
    console.log(`Tag clicked: ${tag}`);
    // Here you would typically implement search by tag or navigation
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <main className="pb-8 md:pb-12 pt-1 md:pt-0">
        <HeroSearch />
        <div className="space-y-2 md:space-y-4">
          <TagList title="Trending" tags={TRENDING_TAGS} onTagClick={handleTagClick} />
          <TagList title="For you" tags={TRENDING_TAGS} onTagClick={handleTagClick} />
        </div>
      </main>
    </div>
  );
}
