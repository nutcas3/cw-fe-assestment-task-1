import { useCallback } from "react";
import { SearchInput } from "./SearchInput";

export function HeroSearch() {
  // Memoize the callback to prevent unnecessary re-renders
  const onSearch = useCallback((search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  }, []);

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
