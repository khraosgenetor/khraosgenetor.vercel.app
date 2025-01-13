"use client";

import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";
import SearchBarPosts from "../RefTSX/functions/SearchBarPosts";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: "0",
    title: "0. Hello World!",
    date: "28-10-2024",
    description:
        "My first post, with an introduction of me. Also explains what the blog will be used for.",
    imageUrl: "/icons/blog-icons/0.jpg",
  },
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
    document.title = "Khraotic Blog | Home"; // Dynamically set title
  }, []);

  const pathname = usePathname();
  const placeholder = "Search posts...";

  return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
          <Header className={"z-10"}/>

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10 w-full">
            <SearchBarPosts placeholder={placeholder} posts={posts} path={pathname as string} />
          </main>
          <Footer className={"z-10"}/>
        </div>
  );
}
