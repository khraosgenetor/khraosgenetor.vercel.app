import Image from "next/image";
import RootLayout from "../layout";
import Header from "../RefTSX/Header";
import Footer from "../RefTSX/Footer";

export const metadata = {
  title: "KhraosGenetor | About Me",
  description: "About Me",
};

export default function About() {
  return (
    <RootLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full text-center">
              My name is Khraos Genetor, a boy born in India.<br></br>I like
              programming, anime, sleeping and coffee.<br></br>
              Studying in HPSB in 10th Grade, ICSE Syllabus.<br></br>
              My favourite song is Do or Die and Rave by Dxrk.<br></br>
              My life started when I was born. I used to be a child.<br></br>I
              learnt programming tryna pirate a game called Minecraft.<br></br>
            </div>
            <hr
              className="w-12 h-[2px] bg-gray-500 self-center"
              style={{ width: "1px", height: "200px", display: "inline-block" }}
            />
            <div className="flex justify-center items-center">
              <Image
                className="dark"
                src="/personal/pfp.png"
                alt="Profile Picture"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
              Programming languages I know:
              <ol>
                <li>Java</li>
                <li>C++</li>
                <li>C</li>
                <li>GoLang</li>
                <li>Rust</li>
                <li>JS and TypeScript</li>
              </ol>
            </div>
            <hr
              className="w-12 h-[2px] bg-gray-500 self-center"
              style={{ width: "1px", height: "200px", display: "inline-block" }}
            />
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
              Tools I use:
              <ol>
                <li>Git (GitHub)</li>
                <li>Vercel</li>
                <li>VS Code</li>
                <li>JetBrains IDEs</li>
                <li>BlueJ</li>
                <li>Docker</li>
                <li>NodeJS</li>
                <li>Vim and NeoVim</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
              Listen to this playlist, it has a lot of phonk.
            </div>
            <hr
              className="w-12 h-[2px] bg-gray-500 self-center"
              style={{ width: "1px", height: "200px", display: "inline-block" }}
            />
            <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-co">
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
        <Footer />
      </div>
    </RootLayout>
  );
}
