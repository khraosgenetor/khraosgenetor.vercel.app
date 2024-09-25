import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        <div className="flex justify-center items-center w-full">
            Welcome, to my website. My name, is Khraos Genetor
        </div>

        <div className="flex justify-center items-center w-full gap-2">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/khraosgenetor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark"
              src="/svgs/icons8-github.svg"
              alt="Vercel logomark"
              width={35}
              height={35}
            />
            @khraosgenetor
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://instagram.com/khraosgenetor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark"
              src="/svgs/icons8-instagram.svg"
              alt="Vercel logomark"
              width={35}
              height={35}
            />
            @khraosgenetor
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://github.com/khraosgenetor/khraosgenetor.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/svgs/icons8-github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          Source Code
        </a>
      </footer>
    </div>
  );
}
