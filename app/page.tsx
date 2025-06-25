import Image from "next/image";
import RootLayout from "./layout";
import Header from "./RefTSX/Header";
import Footer from "./RefTSX/Footer";

export default function Home() {
  return (
      <RootLayout>
        <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
          <Header className="z-10" />

          <main className="flex-grow flex flex-col gap-8 items-center sm:items-start z-10 w-full">
            <div className="flex justify-center items-center w-full">
              <Image
                  src="/personal/pfp.png"
                  alt="Profile picture"
                  width={180}
                  height={180}
                  priority
                  className="rounded-full"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
              />
            </div>

            <div className="flex justify-center items-center w-full text-center font-extrabold">
              <div className="relative inline-block p-4 bg-gray-700 bg-opacity-50 rounded-lg backdrop-blur-md hover:scale-[1.02] transition-transform">
                Welcome to my website. My name is Khraos Genetor.<br />
                Hope you have a good day here.
              </div>
            </div>
          </main>

          <Footer className="z-10" />
        </div>
      </RootLayout>
  );
}
