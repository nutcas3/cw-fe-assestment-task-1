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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <main className="pb-12">
        <HeroSearch />
        <TagList title="Trending" tags={TRENDING_TAGS} />
        <TagList title="For you" tags={TRENDING_TAGS} />
      </main>
    </div>
  );
}
