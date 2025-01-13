import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import RootLayout from "@/app/layout";
import Image from "next/image";
import CopyCode from "../../RefTSX/functions/CopyCode";
import dedent from "@/app/RefTSX/functions/dedent";

export const metadata = {
    title: "KhraosGenetor | GH/ProgrammingNotes",
    description: "GH Repo: ProgrammingNotes",
};

export default function ProgrammingNotes() {
    const sshCodeSnippet = dedent(`
        git clone git@github.com:khraosgenetor/ProgrammingNotes.git
        cd ProgrammingNotes
        obsidian ./
    `);

    const httpsCodeSnippet = dedent(`
        git clone https://github.com/khraosgenetor/ProgrammingNotes.git
        cd ProgrammingNotes
        obsidian ./
    `);

    return (
        (<RootLayout>
            <div className="relative min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

                <Header className="z-10" />
                <br />

                <main className="flex flex-col gap-8 items-center sm:items-start z-10">
                    <div className="flex items-center gap-4">
                        <Image
                            // Update with your profile image path
                            src="/svgs/obsidian-icon.svg"
                            alt="Obsidian Logo for Notes"
                            width={100}
                            height={100}
                            className="rounded-full"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                        <h1 className="text-2xl font-bold text-white">
                            <a
                                href="https://github.com/khraosgenetor/ProgrammingNotes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ProgrammingNotes
                            </a>
                        </h1>
                    </div>
                    <p className="text-white text-center">
                        All the notes I refer to for my programming journey.
                    </p>

                    <h3 className="text-white">If you use SSH Git (recommended), then:</h3>
                    <CopyCode code={sshCodeSnippet} language={"bash"} />

                    <h3 className="text-white">Otherwise, use HTTPS:</h3>
                    <CopyCode code={httpsCodeSnippet} language={"bash"} />
                </main>
                <br />
                <Footer className="z-10" />
            </div>
        </RootLayout>)
    );
}