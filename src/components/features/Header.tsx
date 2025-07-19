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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800/50" role="banner">
      <div className="flex items-center justify-between h-14 md:h-16 px-3 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <a href="/" aria-label="Wortionary home page">
            <img src="/task1/logo.png" alt="Wortionary Logo" className="w-7 h-7 md:w-10 md:h-10" />
          </a>
          <span className="text-white font-semibold text-base md:text-xl">Wortionary</span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile search button */}
          <button 
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open search"
            onClick={() => console.log('Mobile search clicked')}
          >
            <Search className="w-4 h-4" />
          </button>
          
          {/* Desktop search input */}
          <div className="relative hidden md:block">
            <label htmlFor="quick-search" className="sr-only">Quick search</label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
            <Input
              id="quick-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Quick search..."
              aria-label="Quick search"
              className="pl-9 pr-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 focus:bg-gray-800/90 focus:ring-2 focus:ring-blue-400 focus:outline-none text-white border-0 rounded-full w-64 transition-colors"
            />
          </div>
          
          <Avatar 
            className="w-7 h-7 md:w-8 md:h-8 ring-1 md:ring-2 ring-gray-700 ring-offset-1 md:ring-offset-2 ring-offset-black"
            role="button"
            tabIndex={0}
            aria-label="User profile"
            onClick={() => console.log('User profile clicked')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('User profile activated via keyboard');
              }
            }}
          >
            <AvatarImage src="/avatar.jpg" alt="User profile" />
            <AvatarFallback aria-hidden="true">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
