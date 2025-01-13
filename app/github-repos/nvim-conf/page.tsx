import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import RootLayout from "@/app/layout";
import Image from "next/image";
import CopyCode from "../../RefTSX/functions/CopyCode";
import dedent from "@/app/RefTSX/functions/dedent";
import Background from "@/app/RefTSX/Background"; // Import the client component

export const metadata = {
    title: "KhraosGenetor | GH/ProgrammingNotes",
    description: "GH Repo: ProgrammingNotes",
};

export default function nvim_conf() {
    const sshCodeSnippetUnix = dedent(`
        git clone git@github.com:khraosgenetor/nvim-conf ~/.config/nvim
        nvim
    `);

    const httpsCodeSnippetUnix = dedent(`
        git clone https://github.com/khraosgenetor/nvim-conf ~/.config/nvim
        nvim
    `);

    const sshCodeSnippetWin = dedent(`
        git clone git@github.com:khraosgenetor/nvim-conf ~\\AppData\\Local
        nvim
    `);

    const httpsCodeSnippetWin = dedent(`
        git clone https://github.com/khraosgenetor/nvim-conf ~\\AppData\\Local
        nvim
    `);

    return (
        <RootLayout>
            <div className="relative min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Background className="absolute inset-0 z-0" /> {/* Ensure full coverage */}

                <Header className="z-10" />

                <main className="flex flex-col gap-8 items-center sm:items-start z-10">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/svgs/svgrepo-nvim.svg" // Update with your profile image path
                            alt="NeoVim Logo for IDE"
                            width={100}
                            height={100}
                            className="bg-gray-700 rounded-full"
                        />
                        <h1 className="text-2xl font-bold text-white">
                            <a
                                href="https://github.com/khraosgenetor/ProgrammingNotes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                nvim-conf
                            </a>
                        </h1>
                    </div>
                    <p className="text-white font-bold text-center">
                        IDE I use for development on my Arch machine
                    </p>

                    <h1 className="text-white">For OSX and Linux:</h1>

                    <h3 className="text-white">If you use SSH Git (recommended), then:</h3>
                    <CopyCode code={sshCodeSnippetUnix} language={"bash"} />

                    <h3 className="text-white">Otherwise, use HTTPS:</h3>
                    <CopyCode code={httpsCodeSnippetUnix} language={"bash"} />

                    <h1 className="text-white">For Windows:</h1>

                    <h3 className="text-white">If you use SSH Git (recommended), then:</h3>
                    <CopyCode code={sshCodeSnippetWin} language={"bash"} />

                    <h3 className="text-white">Otherwise, use HTTPS:</h3>
                    <CopyCode code={httpsCodeSnippetWin} language={"bash"} />
                </main>
                <br />
                <Footer className="z-10" />
            </div>
        </RootLayout>
    );
}