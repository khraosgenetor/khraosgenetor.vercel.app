"use client";

import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import Image from "next/image";
import {useEffect} from "react";

type Post = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const posts: Record<string, Post> = {
  "0": {
    title: "Hello World!",
    date: "28-10-2024",
    description:
      "My first post, with an introduction of me. Also explains what the blog will be used for.",
    imageUrl: "/icons/blog-icons/0.jpg",
  },
};

export default function BlogPost() {
  useEffect(() => {
    document.title = "KB | 0. Hello World"; // Dynamically set title
  }, []);
  const post = posts["0"];

  if (!post) return <p>Post not found</p>;

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full text-center">
              <article className="max-w-2xl text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-32 h-auto rounded-lg"
                    width={128}
                    height={128}
                  />
                </div>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p className="text-gray-400">{post.date}</p>
                <p className="mt-2 text-lg">{post.description}</p>

                <div className="mt-4 text-base text-gray-200 text-center">
                  <p>My name is Khraos Genetor, a boy born in India.</p>
                  <p>I like programming, anime, sleeping, and coffee.</p>
                  <p>Studying in HPSB in 10th Grade, ICSE Syllabus.</p>
                  <p>
                    My favourite song is <strong>Do or Die</strong> and{" "}
                    <strong>Rave</strong> by Dxrk.
                  </p>
                  <p>
                    I started my programming journey trying to pirate a game
                    called Minecraft, which sparked my interest in coding.
                  </p>
                </div>

                <div className="mt-4 text-base text-gray-200 text-center">
                  <h2 className="text-xl font-semibold">
                    What This Blog Will Be About
                  </h2>
                  <p>
                    This blog will serve as my daily journal where I share my
                    programming experiences, thoughts on various topics, and
                    updates on my learning journey.
                  </p>
                  <p>Expect to see:</p>
                </div>
                <div className="mt-4 text-base text-gray-200 text-center">
                  <ul className="list-disc list-inside pl-4 mt-2 text-left">
                    <li>Programming tutorials and tips</li>
                    <li>Project updates and showcases</li>
                    <li>Reflections on my learning process</li>
                    <li>Anime recommendations and reviews</li>
                    <li>Personal thoughts and musings</li>
                  </ul>
                </div>

                <div className="mt-4 text-base text-gray-200 text-center">
                  <h2 className="text-xl font-semibold">
                    Join Me on This Journey!
                  </h2>
                  <p>
                    I invite you to join me as I navigate the world of
                    programming and share my insights. Whether you're a fellow
                    student, a seasoned developer, or someone simply curious
                    about technology, I hope you find something valuable here.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}
