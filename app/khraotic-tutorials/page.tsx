import Link from "next/link";
import RootLayout from "../layout";
import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";

export const metadata = {
  title: "Khraotic Tutorials | Home",
  description:
    "Khraotic Tutorial's Homepage'",
};

type Tutorial = {
  id: string;
  title: string;
  startDate: string;
  description: string;
  imageUrl: string;
};

const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Dev Setup (Arch Linux)",
    startDate: "29-10-2024",
    description:
      "Setting up the dev environment for Arch Linux.",
    imageUrl: "/icons/tutorial-icons/1.jpeg",
  },
];

export default function TutorialIndex() {
  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <h1 className="text-3xl font-bold text-center">Tutorials</h1>
          <div className="flex flex-col w-full gap-6 sm:flex-row sm:flex-wrap">
            {tutorials.map((Tutorial) => (
              <Link
                key={Tutorial.id}
                href={`/khraotic-tutorials/${Tutorial.id}`}
                className="flex items-start w-full sm:w-1/2 lg:w-1/3 p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={Tutorial.imageUrl}
                  alt={Tutorial.title}
                  className="w-16 h-16 object-cover mr-4 rounded"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-white">
                    {Tutorial.title}
                  </h4>
                  <p className="text-sm text-gray-400">{Tutorial.startDate}</p>
                  <p className="mt-1 text-gray-300">{Tutorial.description}</p>
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

