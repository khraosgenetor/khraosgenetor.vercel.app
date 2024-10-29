import RootLayout from "@/app/layout";
import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Khraotic Tutorial | 'Dev Setup'",
  description: "Setting up the dev environment for Arch Linux.",
};

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
  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center text-center sm:items-start w-full">
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full text-center">
              <article className="max-w-2xl text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/icons/tutorial-icons/1.jpeg"
                    alt="Dev Setup Tutorials"
                    className="w-32 h-auto rounded-lg"
                    width={128}
                    height={128}
                  />
                </div>
              </article>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center">
            Dev Setup Tutorials
          </h1>
          <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/khraotic-blog/${post.id}`}
                className="flex items-start w-full sm:w-1/2 lg:w-1/3 p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-16 h-16 object-cover mr-4 rounded"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-white">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <p className="mt-1 text-gray-300">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </RootLayout>
  );
}
