// ResultsLayout.tsx
import React from 'react';
import localFont from 'next/font/local';
import '../../app/globals.css';

const geistSans = localFont({
    src: '../../app/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 100',
});
const geistMono = localFont({
    src: '../../app/fonts/GeistVF.woff',
    variable: '--font-geist-mono',
    weight: '100 100',
});

const ResultsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <main className="container mx-auto p-4">
                {children}
            </main>
        </div>
    );
};

export default ResultsLayout;