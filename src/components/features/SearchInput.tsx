import { useState, useCallback, useEffect } from "react";
import type { RefObject } from "react";
import { Search } from "lucide-react";
import { Button, Label, Input } from "@/components/ui/components";
import { useDebounce } from "@/hooks";

interface SearchInputProps {
  initialValue: string;
  onSearch: (search: string) => void;
  value?: string;
  onValueChange?: (v: string) => void;
  searchTrigger?: number;
  inputRef?: RefObject<HTMLInputElement>;
}

export function SearchInput({ initialValue, onSearch, value, onValueChange, searchTrigger, inputRef }: SearchInputProps) {
  const isControlled = typeof value === "string" && typeof onValueChange === "function";
  const [internalValue, setInternalValue] = useState(initialValue);
  const inputValue = isControlled ? value! : internalValue;
  const setInputValue = isControlled ? onValueChange! : setInternalValue;

  const debouncedInputValue = useDebounce(inputValue, 300);

  // Trigger search when debounced value changes
  useEffect(() => {
    if (debouncedInputValue.trim()) {
      onSearch(debouncedInputValue);
    }
  }, [debouncedInputValue, onSearch]);

  // When searchTrigger changes, trigger search with current value
  useEffect(() => {
    if (typeof searchTrigger === "number") {
      onSearch(inputValue);
    }
  }, [searchTrigger, inputValue, onSearch]);

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
    <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-md w-full max-w-2xl shadow-lg border border-zinc-700/50">
      <Label htmlFor="search-input" className="sr-only">Search</Label>
      <Search className="text-gray-400 w-4 h-4 flex-shrink-0" />
      <Input
        id="search-input"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-0 text-white font-bold placeholder:text-gray-400 focus-visible:ring-0 text-sm px-0 rounded-md"
      />
      <Button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-1 text-sm rounded-md transition-colors"
      >
        Search
      </Button>
    </div>
  );
}
