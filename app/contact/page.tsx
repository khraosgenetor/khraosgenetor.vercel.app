import Image from "next/image";

export default function Contact() {
    return (
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
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://discord.com/users/1219542034998628352"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark"
                            src="/svgs/icons8-discord.svg"
                            alt="Vercel logomark"
                            width={35}
                            height={35}
                        />
                        @khraos.genetor_
                    </a>
            </div>
    )
}
