import Image from "next/image";
import RootLayout from "../layout";
import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";

export const metadata = {
    title: "KhraosGenetor | GitHub Repositories",
    description: "GH Repos",
};

export default function GitHub() {
    const repos = [
        {
            name: "khraosgenetor",
            description: "The GitHub README for my profile.",
            link: "https://github.com/khraosgenetor/khraosgenetor",
            page: "khraosgenetor",
            image: "/personal/ghpfp.jpg",
        },
        {
            name: "khraosgenetor.vercel.app",
            description: "The Source Code for this website",
            link: "https://github.com/khraosgenetor/khraosgenetor.vercel.app",
            page: "khraosgenetor.vercel.app",
            image: "/personal/pfpVer.png",
        },
        {
            name: "nvim-conf",
            description: "My NeoVim configuration",
            link: "https://github.com/khraosgenetor/nvim-conf",
            page: "nvim-conf",
            image: "/svgs/svgrepo-nvim.svg",
        },
        {
            name: "SolutionsForClass10APC_CTA_TB_For_ICSE",
            description: "Solutions for ICSE CTA APC textbook",
            link: "https://github.com/khraosgenetor/SolutionsForClass10APC_CTA_TB_For_ICSE",
            page: "SolutionsForClass10APC_CTA_TB_For_ICSE",
            image: "/svgs/svgrepo-comp.svg",
        },

        // Add more repositories as needed
    ];

    return (
        <RootLayout>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Header />

                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <div className="flex flex-wrap justify-center gap-8">
                    {repos.map((repo, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-3 bg-[#1b1b1b] rounded-lg shadow-lg">
                            {repo.image && (
                                <Image
                                    src={repo.image}
                                    alt={`${repo.name} icon`}
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            )}
                            <a
                                href={`/github-repos/${repo.page}`}
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-white hover:text-blue-500"
                            >
                                {repo.name}
                            </a>
                            <p className="text-gray-400">{repo.description}</p>
                            <a
                                href={repo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-300 mt-2"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                    </div>
                </main>

                <Footer />
            </div>
        </RootLayout>
    );
}
