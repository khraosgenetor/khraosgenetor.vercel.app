import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center">
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
  );
}
