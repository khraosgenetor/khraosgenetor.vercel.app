// app/RefTSX/functions/SearchBarIndex.tsx

"use client";

import { useState, useEffect, useRef } from 'react';

// Define the type for the result
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
    const [results, setResults] = useState<Result[]>([]); // Use the Result type
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
            // Navigate to the results page with the query
            window.location.href = `/results?query=${encodeURIComponent(query)}`;
        }
    };

    return (
        <div className="relative">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder=" 🔎︎ Search..."
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 pl-10"
            />
            {query && results.length > 0 && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-[#1b1b1b] border border-[#555] rounded-md">
                    {results.map((result) => (
                        <li key={result.file} className="px-4 py-2 text-gray-300">
                            <a href={`/results?query=${encodeURIComponent(result.content.title)}`} className="block">{result.content.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBarIndex;