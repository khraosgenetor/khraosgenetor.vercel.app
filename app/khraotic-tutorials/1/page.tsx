"use client";

import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import {useEffect} from "react";
import SearchBarPosts from "@/app/RefTSX/functions/SearchBarPosts";
import { usePathname } from "next/navigation";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "1. Setting up a developer machine.",
    date: "29-10-2024",
    description: "The first post of the Series 'Dev Setup: Linux 101'",
    imageUrl: "/icons/blog-icons/1.jpeg",
  },
];

export default function BlogIndex() {
  useEffect(() => {
    document.title = "KT | 1. Setting up a developer Machine"; // Dynamically set title
  }, []);

  const pathname = usePathname();
  const placeholder = "Search tutorials...";

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center text-center sm:items-start w-full">

          <h1 className="text-3xl font-bold text-center">
            Dev Setup Tutorials
          </h1>
          <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
            <SearchBarPosts placeholder={placeholder} posts={posts} path={pathname as string} />
          </div>
        </main>
        <Footer/>
      </div>
  );
}
