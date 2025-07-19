import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Memoize the search handler
  const handleSearch = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      console.log("Quick search:", searchQuery);
      // Implement search functionality here
    }
  }, [searchQuery]);
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Quick search..."
              aria-label="Quick search"
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
