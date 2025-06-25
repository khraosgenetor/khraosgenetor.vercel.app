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
      name: "taskapp-cli",
      description: "A taskapp utilizing CLI and JSON",
      link: "https://github.com/khraosgenetor/taskapp-cli",
      page: "taskapp-cli",
      image: "/personal/task-list.png",
    },
  ];

  return (
      <RootLayout>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
          <Header className="z-10" />

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10 w-full">
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {repos.map((repo, index) => (
                  <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-xl shadow-lg bg-background dark:bg-[#2a2a2a] text-foreground transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
                  >
                    {repo.image && (
                        <Image
                            src={repo.image}
                            alt={`${repo.name} icon`}
                            width={100}
                            height={100}
                            className="rounded-full"
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                        />
                    )}

                    <a
                        href={`/projects/${repo.page}`}
                        className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    >
                      {repo.name}
                    </a>

                    <p className="text-sm opacity-80 mt-1">{repo.description}</p>

                    <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-400 mt-2 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
              ))}
            </div>
          </main>

          <Footer className="z-10" />
        </div>
      </RootLayout>
  );
}
