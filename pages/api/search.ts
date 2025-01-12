import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises'; // Use the promises API for async file operations
import path from 'path';

// Define a type for the content structure
type Content = {
    title: string;
    description: string;
    keywords: string[];
};

// Define the data directory path
const dataDirectory = path.join(process.cwd(), 'pages', 'api', 'data');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { keyword } = req.query;

    // Validate the keyword
    if (!keyword || Array.isArray(keyword)) {
        return res.status(400).json({ error: 'Invalid keyword' });
    }

    try {
        const files = await fs.readdir(dataDirectory); // Asynchronously read the directory
        const results: { file: string; content: Content }[] = []; // Define the type for results

        for (const file of files) {
            const filePath = path.join(dataDirectory, file);
            const fileContent = await fs.readFile(filePath, 'utf-8'); // Asynchronously read the file
            let jsonData: Content | null = null;

            try {
                jsonData = JSON.parse(fileContent); // Parse the JSON content
            } catch (error) {
                console.error(`Error parsing JSON from file ${file}:`, error);
                continue; // Skip this file if parsing fails
            }

            // Check if jsonData is not null before accessing properties
            if (jsonData) {
                const keywordLower = keyword.toLowerCase();
                // Check if the keyword is found in title, description, or keywords
                if (
                    jsonData.title.toLowerCase().includes(keywordLower) ||
                    jsonData.description.toLowerCase().includes(keywordLower) ||
                    jsonData.keywords.some((k: string) => k.toLowerCase() === keywordLower)
                ) {
                    results.push({ file, content: jsonData });
                }
            }
        }

        // Return the results
        res.status(200).json(results);
    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).json({ error: 'Failed to read files' });
    }
};
