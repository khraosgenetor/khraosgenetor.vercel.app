"use client";

import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";
import SearchBarPosts from "../RefTSX/functions/SearchBarPosts";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

type Tutorial = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Dev Setup (Arch Linux)",
    date: "29-10-2024",
    description: "Setting up the dev environment for Arch Linux.",
    imageUrl: "/icons/tutorial-icons/1.jpeg",
  },
  // Add more tutorials here as needed
];

export default function TutorialIndex() {
  useEffect(() => {
    document.title = "Khraotic Tutorials | Home"; // Dynamically set title
  }, []);

  const placeholder = "Search tutorials...";
  const pathname = usePathname();

  return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
          <Header />

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
            <h1 className="text-3xl font-bold text-center">Tutorials</h1>

            {/* Search Bar */}
            <SearchBarPosts placeholder={placeholder} posts={tutorials} path={pathname as string}  />
          </main>

          <Footer />
        </div>
  );
}
