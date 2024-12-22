"use client";

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

type Page = {
    title: string;
    url: string;
    content: string;
};

const SearchBarIndex = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Page[]>([]);
    const [pages, setPages] = useState<Page[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Fetch all pages (this can be dynamically fetched via an API route or static data)
        const fetchPages = async () => {
            const res = await fetch('/api/pages');
            const data = await res.json();
            setPages(data);
        };

        fetchPages();
    }, []);

    useEffect(() => {
        // Initialize Fuse.js when pages are fetched
        const fuse = new Fuse(pages, {
            keys: ['title', 'content', 'url'],
            includeScore: true,
        });

        // Search results when query changes
        const results = fuse.search(query).map((result) => result.item);
        setResults(results);
        setSelectedIndex(-1); // Reset selected index when query changes
    }, [query, pages]);

    useEffect(() => {
        // Handle Ctrl + F focus on search input
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'f') {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (event.key === 'ArrowUp') {
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (event.key === 'Enter' && selectedIndex >= 0) {
            window.location.href = results[selectedIndex].url; // Navigate to the selected result
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
                placeholder=" 🔎︎    Search..."
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 pl-10"
            />

            {query && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-[#1b1b1b] border border-[#555] rounded-md">
                    {results.map((result, index) => (
                        <li
                            key={result.url}
                            className={`px-4 py-2 cursor-pointer ${
                                index === selectedIndex
                                    ? 'bg-[#555555] text-gray-100'
                                    : 'text-gray-300'
                            }`}
                        >
                            <a href={result.url} className="block">{result.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBarIndex;
