import { useState } from "react";
import { Header } from "@/components/features/Header";
import { HeroSearch } from "@/components/features/HeroSearch";
import { TagList } from "@/components/features/TagList";

export function Home() {
  const [tags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <main className="pb-12">
        <HeroSearch />
        <TagList title="Trending" tags={tags} />
        <TagList title="For you" tags={tags} />
      </main>
    </div>
  );
}
