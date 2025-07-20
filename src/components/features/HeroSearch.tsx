import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { SearchInput } from "./SearchInput";


interface HeroSearchProps {
  initialValue: string;
  onSearch: (search: string) => void;
  searchTrigger: number;
}

export function HeroSearch({ initialValue, onSearch, searchTrigger }: HeroSearchProps) {
  // This effect will trigger search in SearchInput when searchTrigger changes
  const inputRef = useRef<HTMLInputElement>(null) as RefObject<HTMLInputElement>;

  useEffect(() => {
    if (initialValue && inputRef.current) {
      // Optionally focus the input
      inputRef.current.focus();
    }
  }, [initialValue, searchTrigger]);

  return (
    <section 
      className="relative w-full max-w-7xl mx-auto overflow-hidden mt-0"
      aria-labelledby="hero-heading"
    >
      <div className="relative h-[350px] md:h-[540px] overflow-hidden mt-4 md:mt-8">
        <img 
          src="/task1/hero-bg.png" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center rounded-md" 
          aria-hidden="true" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col items-center justify-center px-3 md:px-8">
          <h1 
            id="hero-heading" 
            className="text-4xl md:text-5xl font-extrabold text-white text-center max-w-4xl mb-6 md:mb-8 px-2"
          >
            Search for words, phrases and meanings
          </h1>
          <div className="w-full max-w-xl px-4 rounded-md">
            <SearchInput 
              initialValue={initialValue}
              onSearch={onSearch}
              searchTrigger={searchTrigger}
              inputRef={inputRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
