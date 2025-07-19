import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchInputProps {
  initialValue: string;
  onSearch: (search: string) => void;
}

export function SearchInput({ initialValue, onSearch }: SearchInputProps) {
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
