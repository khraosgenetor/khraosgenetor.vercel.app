"use client";

import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

type Page = {
    title: string;
    url: string;
    content: string; // You could fetch actual content from each page if needed.
};

const SearchBarIndex = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Page[]>([]);
    const [pages, setPages] = useState<Page[]>([]);

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
            keys: ['title', 'content', 'url'], // Index title, content, and url
            includeScore: true,
        });

        // Search results when query changes
        const results = fuse.search(query).map((result) => result.item);
        setResults(results);
    }, [query, pages]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="relative">

            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder=" 🔎︎    Search..."
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 pl-10" // Added padding-left for the icon
            />

            {query && (
                <ul>
                    {results.map((result) => (
                        <li key={result.url}>
                            <a href={result.url}>{result.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBarIndex;
