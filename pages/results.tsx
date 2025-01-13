import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ResultsLayout from "@/pages/layouts/ResultsLayout";
import Header from "@/app/RefTSX/Header";
import Footer from "@/app/RefTSX/Footer";
import Image from "next/image";

type Result = {
    file: string;
    content: {
        image: string;
        title: string;
        url: string;
        content: string;
        keywords: string[];
    };
};

const ResultsPage = () => {
    const router = useRouter();
    const { query } = router.query; // Get the query parameter from the URL
    const [results, setResults] = useState<Result[]>([]); // Use the Result type
    const [error, setError] = useState<string | null>(null); // To handle any errors

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                const keyword = Array.isArray(query) ? query[0] : query; // Take the first element if it's an array
                try {
                    const res = await fetch(`/api/search?keyword=${encodeURIComponent(keyword)}`);
                    const data = await res.json(); // Parse the response as JSON
                    setResults(data); // Set results state if the data is valid
                } catch (err) {
                    console.error("Error fetching results:", err);
                    setError("Failed to fetch search results.");
                }
            }
        };
        fetchResults();
    }, [query]);

    return (
        <ResultsLayout>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
                <Header/>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Search Results for: {Array.isArray(query) ? query.join(', ') : query}
                    </h1>
                    {error && <p className="text-red-500">{error}</p>}
                    {results.length > 0 ? (
                        <ol className="pl-5">
                            {results.map((result, index) => (
                                <li key={result.file} className="mb-4 p-4 border-b border-gray-700 flex items-center">
                                    <span style={{ fontSize: '32px', marginRight: '8px' }}>{index + 1}.</span>
                                    <Image
                                        src={result.content.image}
                                        alt=""
                                        width={60}
                                        height={60}

                                    />
                                    <a
                                        href={result.content.url}
                                        className="text-blue-400 hover:underline"
                                        style={{ marginLeft: '8px', fontSize: '32px' }} // Adjust fontSize as needed
                                    >
                                        {result.content.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p className="text-gray-400">No results found.</p>
                    )}
                </div>
                <Footer/>
            </div>
        </ResultsLayout>
    );
};

export default ResultsPage;