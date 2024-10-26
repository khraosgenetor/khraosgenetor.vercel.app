import Image from "next/image";
import RootLayout from "./layout";
import Header from "./RefTSX/Header";
import Footer from "./RefTSX/Footer";

export default function Home() {
  return (
    <RootLayout>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="flex justify-center items-center w-full">
            <Image
                className="dark"
                src="/personal/pfp.png"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            </div>
            <div className="flex justify-center items-center w-full text-center">
                Welcome to my website. My name, is Khraos Genetor.<br></br>
                Hope you have a good day here.
            </div>
        </main>
            <Footer />
        </div>
    </RootLayout>
  );
}
