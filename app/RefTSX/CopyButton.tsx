// CopyButton.tsx
"use client"; // This component will be client-side

import { useState } from "react";

const CopyButton = ({ text }: { text: string }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopySuccess(true))
            .catch(() => setCopySuccess(false));

        // Reset the success message after a short delay
        setTimeout(() => setCopySuccess(false), 2000);
    };

    return (
        <div>
            <button
                onClick={copyToClipboard}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                title="Copy to clipboard"
            >
                Copy Code
            </button>
            {copySuccess && (
                <span className="text-green-500 ml-2">Code copied!</span>
            )}
        </div>
    );
};

export default CopyButton;
