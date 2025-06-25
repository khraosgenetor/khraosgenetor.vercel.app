"use client";

import { useState, useEffect, useRef } from 'react';

type Result = {
    file: string;
    content: {
        title: string;
        url: string;
        content: string;
        keywords: string[];
    };
};

const SearchBarIndex = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Result[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                const res = await fetch(`/api/search?keyword=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data);
            } else {
                setResults([]);
            }
        };

        fetchResults();
    }, [query]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            window.location.href = `/results?query=${encodeURIComponent(query)}`;
        }
    };

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder="🔎︎ Search..."
                className="w-full rounded-md border border-[#2a2a2a] transition-colors bg-[#121212] text-[#f5f5f5] placeholder:text-gray-500 text-xs sm:text-sm h-[36px] sm:h-[42px] px-3.5"
            />
            {query && results.length > 0 && (
                <ul className="absolute top-full left-0 right-0 mt-1.5 bg-[#1a1a1a] border border-[#333] rounded-md shadow-lg z-50 text-sm">
                    {results.map((result) => (
                        <li key={result.file} className="px-3 py-1.5 hover:bg-[#2a2a2a] text-gray-300">
                            <a href={`/results?query=${encodeURIComponent(result.content.title)}`} className="block">
                                {result.content.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBarIndex;
