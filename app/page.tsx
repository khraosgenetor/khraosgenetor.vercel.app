import Image from "next/image";

import RootLayout from "./layout";

import Header from "./RefTSX/Header";

import Footer from "./RefTSX/Footer";

import Background from "@/app/RefTSX/Background";


export default function Home() {

  return (

      <RootLayout>

        <div className="relative grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

          <Header className="z-10" />

          <Background className="z-0" />


          <main
              className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10"> {/* Ensure main content is above the background */}

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

            <div className="flex justify-center items-center w-full text-center font-extrabold">
              <div className="relative inline-block p-4 bg-gray-700 bg-opacity-50 rounded-lg backdrop-blur-md">
                Welcome to my website. My name is Khraos Genetor.<br/>
                Hope you have a good day here.
              </div>
            </div>

          </main>


          <Footer className="z-10"/> {/* Ensure footer is above the background */}

        </div>

      </RootLayout>

  );

}