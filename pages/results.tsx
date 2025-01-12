import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Search Results for: {Array.isArray(query) ? query.join(', ') : query}
            </h1>
            {error && <p className="text-red-500">{error}</p>}
            {results.length > 0 ? (
                <ul>
                    {results.map((result) => (
                        <li key={result.file} className="mb-2">
                            <h2 className="text-xl font-semibold">{result.content.title}</h2>
                            <a href={result.content.url} className="text-xl font-semibold">
                                {result.content.url}
                            </a>
                            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(result.content, null, 2)}</pre>
                            <p className="text-gray-600">Keywords: {result.content.keywords.join(', ')}</p>
                            <a href={result.content.url} className="text-blue-500 underline">View Tutorial</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default ResultsPage;
