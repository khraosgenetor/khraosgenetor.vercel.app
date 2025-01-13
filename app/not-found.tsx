"use client";

import Header from "./RefTSX/Header";
import Footer from "./RefTSX/Footer";
import Image from "next/legacy/image";
import {usePathname} from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "KhraosGenetor | 404"; // Dynamically set title
  }, []);

  const pathname = usePathname();

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col text-center">
              <ul className="list-none">
                <li>
                  404 - The path "{pathname}" does not exist, yet.
                </li>
                <li>Contact KhraosGenetor if the site breaks.</li>
              </ul>
            </div>

            <hr
                className="w-12 h-[2px] bg-gray-500 self-center"
                style={{ width: "3px", height: "200px", display: "inline-block" }}
            />
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
              <Image
                  className="dark"
                  src="/svgs/404-error.svg"
                  alt="404 Error"
                  width={300}
                  height={300}
                  priority
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}
