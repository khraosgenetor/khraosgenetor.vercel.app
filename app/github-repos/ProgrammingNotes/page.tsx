import Footer from "@/app/RefTSX/Footer";
import Header from "@/app/RefTSX/Header";
import RootLayout from "@/app/layout";
import Image from "next/image";
import CopyCode from "../../RefTSX/CopyCode"; // Import the client component

export const metadata = {
    title: "KhraosGenetor | GH/ProgrammingNotes",
    description: "GH Repo: ProgrammingNotes",
};

function dedent(code: string): string {
    const lines = code.split("\n");
    const minIndent = Math.min(
        ...lines.filter((line) => line.trim()).map((line) => line.match(/^(\s*)/)?.[1]?.length || 0)
    );
    return lines.map((line) => line.slice(minIndent)).join("\n").trim();
}


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
        <RootLayout>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Header />

                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/svgs/obsidian-icon.svg" // Update with your profile image path
                            alt="Obsidian Logo for Notes"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
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
                    <p className="text-gray-400 text-center">
                        All the notes I refer to for my programming journey.
                    </p>

                    If you use SSH Git (recommended), then:
                    <CopyCode code={sshCodeSnippet} language={"bash"} />

                    Otherwise, use HTTPS:
                    <CopyCode code={httpsCodeSnippet} language={"bash"} />
                </main>

                <Footer />
            </div>
        </RootLayout>
    );
}
