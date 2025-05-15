"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
}

const searchResults: SearchResult[] = [
  {
    id: "1",
    title: "ROX01 Specifications",
    description: "Technical specifications and features of ROX01",
    url: "/specifications",
  },
  {
    id: "2",
    title: "ROX01 Price",
    description: "Pricing information and available configurations",
    url: "/price",
  },
  {
    id: "3",
    title: "ROX01 Gallery",
    description: "Photo gallery of ROX01 exterior and interior",
    url: "/gallery",
  },
  {
    id: "4",
    title: "ROX01 Manuals",
    description: "User manuals and documentation",
    url: "/manuals",
  },
  {
    id: "5",
    title: "ROX01 Warranty",
    description: "Warranty information and terms",
    url: "/warranty",
  },
];

export function SearchBar() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const filteredResults = searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(value.toLowerCase()) ||
          result.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = (url: string) => {
    window.location.href = url;
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder={t("search.placeholder")}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-10"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
              onClick={() => {
                setQuery("");
                setResults([]);
                setIsOpen(false);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <button
              key={result.id}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => handleResultClick(result.url)}
            >
              <h3 className="font-medium text-gray-900">{result.title}</h3>
              <p className="text-sm text-gray-500">{result.description}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 