import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import RootLayout from "@/app/layout";
import Image from "next/image";

export const metadata = {
  title: "KhraosGenetor | GH/khraosgenetor",
  description: "GH Repo: khraosgenetor",
};

export default function KhraosGenetor() {
  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex items-center gap-4">
            <Image
              src="/personal/ghpfp.jpg" // Update with your profile image path
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-white">
              <a
                href="https://github.com/khraosgenetor/khraosgenetor"
                target="_blank"
                rel="noopener noreferrer"
              >
                khraosgenetor
              </a>
            </h1>
          </div>
          <p className="text-gray-400 text-center">
            This is the README for my GitHub profile.
          </p>
        </main>

        <Footer />
      </div>
    </RootLayout>
  );
}
