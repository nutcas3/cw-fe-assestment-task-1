import { useState, useCallback } from "react";
import { Header, HeroSearch, TagList } from "@/components/features";

const TRENDING_TAGS = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
];

export function Home() {
  // Manage search state in Home
  const [searchValue, setSearchValue] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0); // Forcing trigger

  // Handler to pass to SearchInput/HeroSearch
  const handleSearch = useCallback((search: string) => {
    // Implement actual search logic here
    console.log("Search triggered:", search);
  }, []);

  // When a tag is clicked, set search value and trigger search
  const handleTagClick = useCallback((tag: string) => {
    setSearchValue(tag);
    setSearchTrigger(t => t + 1); // Change to force effect
    handleSearch(tag);
  }, [handleSearch]);

  return (
    <div className="min-h-screen bg-[#121417]">
      <Header />
      <main className="pb-8 md:pb-12 pt-1 md:pt-0">
        {/* Pass value and onSearch to HeroSearch */}
        <HeroSearch initialValue={searchValue} onSearch={handleSearch} searchTrigger={searchTrigger} />
        <div className="space-y-2 md:space-y-4">
          <TagList title="Trending" tags={TRENDING_TAGS} onTagClick={handleTagClick} />
          <TagList title="For you" tags={TRENDING_TAGS} onTagClick={handleTagClick} />
        </div>
      </main>
    </div>
  );
}
