import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function TagList({ title, tags }: { title: string; tags: string[] }) {
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

function HeroSearch() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden mt-4 md:mt-8">
      <div className="relative h-[480px] rounded-2xl overflow-hidden">
        <img 
          src="/task1/hero-bg.png" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col items-center justify-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl mb-8">
            Search for words, phrases and meanings
          </h1>
          <SearchInput initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}

function SearchInput({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center gap-4 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full w-full max-w-2xl shadow-xl border border-gray-800/50">
      <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 text-lg px-0"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-colors">
        Search
      </Button>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800/50">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/task1/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white font-semibold text-lg md:text-xl">Wortionary</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Quick search..."
              className="pl-9 pr-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 focus:bg-gray-800/90 text-white border-0 rounded-full w-64 transition-colors focus-visible:ring-0"
            />
          </div>
          <Avatar className="w-8 h-8 ring-2 ring-gray-700 ring-offset-2 ring-offset-black">
            <AvatarImage src="/avatar.jpg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default function App() {
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
