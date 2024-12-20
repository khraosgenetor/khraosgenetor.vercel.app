'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CopyCodeProps {
    code: string;
    language: string;
}

export default function CopyCode({ code, language }: CopyCodeProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Add a newline at the top of the code
    const codeWithNewline = `\n${code}`;

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                backgroundColor: '#2d2a2e', // Match darcula background
                borderRadius: '8px',
                border: '1px solid #444',
                padding: '16px',
            }}
        >
            {/* Language Label on Top-Left */}
            <div
                style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#444',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                }}
            >
                {language}
            </div>

            <SyntaxHighlighter
                language={language}
                style={darcula}
                customStyle={{
                    margin: 0,
                    backgroundColor: 'transparent',
                }}
            >
                {codeWithNewline}
            </SyntaxHighlighter>

            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                    zIndex: 1, // Ensure button is on top of language label
                }}
            >
                {copied ? (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ width: '16px', height: '16px' }}
                        >
                            <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                        </svg>
                        Copied!
                    </>
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ width: '16px', height: '16px' }}
                        >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14h2V5h14V3zM7 7v14h10c1.1 0 2-.9 2-2V7H7zm9 12H9v-2h7v2zm0-4H9v-2h7v2zm0-4H9V9h7v2z" />
                        </svg>
                        Copy
                    </>
                )}
            </button>
        </div>
    );
}
