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
  "1": {
    title: "1. Setting up a developer machine.",
    date: "29-10-2024",
    description:
      "The first post of the Series 'Dev Setup: Linux 101'",
    imageUrl: "/icons/blog-icons/1.jpeg",
  },
};

export default function BlogPost() {
  useEffect(() => {
    document.title = "KB | 1. Setting up a developer Machine"; // Dynamically set title
  }, []);

  const post = posts["1"];

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
                  <p>The first installation part for your developer machine setup will begin on October 30, 2024.</p>
                  <p>Here are some prerequisites you’ll need:</p>
                </div>

                <div className="mt-4 text-base text-gray-200 text-center">
                  <ul className="list-disc list-inside pl-4 mt-2 text-left">
                    <li>1. Rufus</li>
                    <li>2. A USB Drive</li>
                    <li>3. An internet connection</li>
                    <li>4. An Arch Linux iso.</li>
                  </ul>
                  <p>The ways to obtain these will be updated tomorrow.</p>
                </div>

                <div className="mt-4 text-base text-gray-200 text-left">
                  <h2 className="text-xl font-semibold text-center">
                    Why these tools?
                  </h2><br />
                  <h3 className="text-xl font-semibold">
                    1. Rufus
                  </h3>
                  <p className="list-disc list-inside pl-4 mt-2 text-left">
                    <strong>Why:</strong> Rufus is a reliable and widely-used tool for creating bootable USB drives,
                    especially useful for flashing an Arch ISO to get started on your installation.
                    It's compatible with multiple OSes and provides a seamless way to load and boot
                    an OS from USB.
                  </p><br />
                  <h3 className="text-xl font-semibold">
                    2. A USB Drive
                  </h3>
                  <p className="list-disc list-inside pl-4 mt-2 text-left">
                    <strong>Why:</strong> A USB drive is useful for OS installation because it can be easily configured
                    as bootable media, allowing a computer to start directly from it, which is essential for installing
                    or reinstalling an OS. It’s portable, compatible with most devices, and lets you install an OS even
                    on systems without a working OS or optical drive, making it a convenient and reliable solution for
                    setup or recovery.
                  </p><br />
                  <h3 className="text-xl font-semibold">
                    3. A internet connection.
                  </h3>
                  <p className="list-disc list-inside pl-4 mt-2 text-center">
                    <strong>Why:</strong> An internet connection is essential for downloading the OS installation file,
                    or ISO, which contains all the necessary system files for setting up the operating system. Without
                    an internet connection, accessing the latest ISO from the official site isn’t possible, which is
                    particularly important for getting the most up-to-date and secure version of the OS. Additionally,
                    an internet connection allows for downloading any required updates, drivers, or dependencies during
                    or after installation, ensuring a smooth setup process.
                  </p><br />
                  <h3 className="text-xl font-semibold">
                    4. Arch Linux iso, and also, why Arch Linux?
                  </h3>
                  <p className="list-disc list-inside pl-4 mt-2 text-center">
                    <strong>Why:</strong> Arch Linux is ideal for developers who want complete control over their environment.
                    With its minimalist design, Arch provides only the essentials, so you can install exactly what you need.
                    It’s lightweight, fast, and customizable, perfect for creating a developer machine from the ground up.
                    Additionally, Arch's pacman package manager offers a vast repository for accessing and updating software,
                    adding to its developer-friendly ecosystem.
                  </p>
                </div>
                <div className="mt-4 text-base text-gray-200 text-left">
                  <p>It is to be noted that the blog will not resume until <strong>the 5th of November, IST</strong></p>
                  <p>as I have to complete my projects and lab manuals, and I will be busy.</p>
                </div>
              </article>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
