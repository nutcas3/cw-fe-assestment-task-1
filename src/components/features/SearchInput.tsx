import { useState, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks";

interface SearchInputProps {
  initialValue: string;
  onSearch: (search: string) => void;
}

export function SearchInput({ initialValue, onSearch }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(initialValue);
  
  const debouncedInputValue = useDebounce(inputValue, 300);
  
  useEffect(() => {
    if (debouncedInputValue.trim()) {
      onSearch(debouncedInputValue);
    }
  }, [debouncedInputValue, onSearch]);
  
  const handleSearch = useCallback(() => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  }, [inputValue, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 md:gap-4 bg-black/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full w-full max-w-2xl shadow-xl border border-gray-800/50">
      <Search className="text-gray-400 w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 text-base md:text-lg px-0"
      />
      <Button 
        onClick={handleSearch}
        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-1 md:py-2 text-sm md:text-base rounded-full transition-colors"
      >
        Search
      </Button>
    </div>
  );
}
