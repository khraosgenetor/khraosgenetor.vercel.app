import Image from "next/image";
import RootLayout from "../layout";
import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";

export const metadata = {
  title: "KhraosGenetor | About Me",
  description: "A brief introduction to Aditya Abhiram, his interests, education, and tools.",
};

export default function About() {
  return (
      <RootLayout>
        <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-foreground bg-background">
          <Header className="z-10" />

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10 w-full">
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
              <div className="flex justify-center items-center w-full text-center font-bold">
                My name is Aditya Abhiram, born and raised in India.<br />
                I have a strong passion for programming, anime, sleeping, and coffee.<br />
                I studied at HPS Begumpet (ICSE syllabus) from Grade 2 to 10,<br />
                and I am currently in Grade 11, studying at Excellencia, West Marredpally.<br />
                My favorite songs include "Do or Die" and "Rave" by Dxrk.<br />
                My journey in programming began with an attempt to pirate Minecraft.<br />
                Now, I work on a variety of projects, including CLI applications and a custom Minecraft Forge mod.<br />
              </div>
              <hr
                  className="bg-foreground self-center"
                  style={{ width: "1px", height: "200px", display: "inline-block" }}
              />
              <div className="flex justify-center items-center">
                <Image
                    className="rounded-md"
                    src="/personal/pfp.png"
                    alt="Profile Picture"
                    width={360}
                    height={360}
                    priority
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col font-bold">
              <div className="flex justify-center items-center w-full gap-4 sm:flex-row flex-col">
                Programming Languages I Use:
                <ol>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C</li>
                  <li>Rust</li>
                  <li>Assembly (occasionally)</li>
                  <li>Go</li>
                  <li>JavaScript & TypeScript</li>
                </ol>
              </div>
              <hr
                  className="bg-foreground self-center"
                  style={{ width: "1px", height: "200px", display: "inline-block" }}
              />
              <div className="flex justify-center items-center w-full gap-4 sm:flex-row flex-col font-bold">
                Tools & Platforms I Work With:
                <ol>
                  <li>Git & GitHub</li>
                  <li>Vercel</li>
                  <li>Visual Studio Code</li>
                  <li>JetBrains IDEs</li>
                  <li>BlueJ (for Java coursework)</li>
                  <li>Docker</li>
                  <li>Node.js</li>
                  <li>Vim / Neovim</li>
                </ol>
              </div>
            </div>

            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col font-bold">
              <div className="flex justify-center items-center w-full gap-4 sm:flex-row flex-col">
                Here is a Spotify playlist I curated, featuring high-energy phonk music:
              </div>
              <hr
                  className="bg-foreground self-center"
                  style={{ width: "1px", height: "200px", display: "inline-block" }}
              />
              <div className="flex justify-center items-center w-full gap-4 sm:flex-row flex-col">
                <iframe
                    style={{ borderRadius: "12px", width: "100%", height: "352px" }}
                    src="https://open.spotify.com/embed/playlist/6a58Nak539mbZWk8Prq33k?utm_source=generator"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
              </div>
            </div>
          </main>
        <br />
          <Footer className="z-12" />
        </div>
      </RootLayout>
  );
}
