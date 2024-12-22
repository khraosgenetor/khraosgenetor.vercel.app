import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import RootLayout from "@/app/layout";
import Image from "next/image";
import CopyCode from "../../RefTSX/functions/CopyCode";
import dedent from "@/app/RefTSX/functions/dedent"; // Import the client component

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
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Header />

                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
                    <p className="text-white text-center">
                        IDE I use for development on my Arch machine
                    </p>

                    <h1>For OSX and Linux:</h1>

                    <h3>If you use SSH Git (recommended), then:</h3>
                    <CopyCode code={sshCodeSnippetUnix} language={"bash"}/>

                    <h3>Otherwise, use HTTPS:</h3>
                    <CopyCode code={httpsCodeSnippetUnix} language={"bash"}/>

                    <h1>For Windows:</h1>

                    <h3>If you use SSH Git (recommended), then:</h3>
                    <CopyCode code={sshCodeSnippetWin} language={"bash"}/>

                    <h3>Otherwise, use HTTPS:</h3>
                    <CopyCode code={httpsCodeSnippetWin} language={"bash"}/>
                </main>

                <Footer/>
            </div>
        </RootLayout>
    );
}
