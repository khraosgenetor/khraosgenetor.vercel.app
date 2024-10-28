import Link from "next/link";
import RootLayout from "../layout";
import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";

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
    title: "1. Hello World!",
    date: "27-10-2024",
    description:
      "This is the first post where we explore the basics of Next.js and its features.",
    imageUrl: "/blog-icons/1.jpg",
  },
];

export default function BlogIndex() {
  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <h1 className="text-3xl font-bold text-center">Blog Posts</h1>
          <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
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
