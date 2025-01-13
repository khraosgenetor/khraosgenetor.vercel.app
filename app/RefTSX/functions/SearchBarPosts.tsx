"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Post = {
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
};

interface SearchBarProps {
    placeholder: string;
    posts: Post[];
    path: string;
}

export default function SearchBarPosts({ placeholder, posts, path }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.description.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        // Listen for Ctrl + F keypress to focus the search input
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "f") {
                event.preventDefault();
                inputRef.current?.focus(); // Focus on the input when Ctrl + F is pressed
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        (<div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full max-w-md gap-2 p-2 bg-gray-800 rounded-lg mb-8">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="flex-grow p-2 text-sm text-white bg-gray-700 rounded-md focus:outline-none"
                />
                <button
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
                >
                    Search
                </button>
            </div>
            <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
                {filteredPosts.map((post) => (
                    <Link
                        key={post.id}
                        href={`${path}/${post.id}`}
                        className="flex items-start w-full sm:w-1/2 lg:w-1/3 p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover mr-4 rounded"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />

                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-white">{post.title}</h4>
                            <p className="text-sm text-gray-400">{post.date}</p>
                            <p className="mt-1 text-gray-300">{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>)
    );
}
