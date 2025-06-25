'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import SearchBarIndex from './functions/SearchBarIndex';

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light') {
            document.documentElement.classList.add('light');
            setIsDark(false);
        } else if (savedTheme === 'dark' || prefersDark) {
            document.documentElement.classList.remove('light');
            setIsDark(true);
        }
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        const html = document.documentElement;
        const isCurrentlyLight = html.classList.contains('light');

        if (isCurrentlyLight) {
            html.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        } else {
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        }
    };

    const linkClasses =
        'text-lg px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#333] hover:scale-105 active:scale-100';

    return (
        <>
            {/* Top-left hamburger button when sidebar is closed */}
            {!isOpen && (
                <header className={`flex justify-start items-center px-4 py-4 ${className}`}>
                    <button
                        onClick={toggleSidebar}
                        className="text-foreground focus:outline-none z-50 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <Menu size={28} />
                    </button>
                </header>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-[#1b1b1b] text-white transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 z-40 shadow-xl flex flex-col justify-between`}
            >
                {/* Close button inside sidebar */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-foreground focus:outline-none transition-colors"
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Navigation links and search */}
                <div className="flex flex-col px-6 gap-4">
                    <Link href="/" onClick={toggleSidebar} className={linkClasses}>
                        Home
                    </Link>
                    <Link href="/about" onClick={toggleSidebar} className={linkClasses}>
                        About Me
                    </Link>
                    <Link href="/projects" onClick={toggleSidebar} className={linkClasses}>
                        Projects
                    </Link>
                    <div className="pt-4">
                        <SearchBarIndex />
                    </div>
                </div>

                {/* Theme toggle button */}
                <div className="p-4 border-t border-[#333]">
                    <button
                        onClick={toggleTheme}
                        className="w-full flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-md bg-[#2a2a2a] hover:bg-[#3a3a3a] transition"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </aside>

            {/* Overlay background when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}
