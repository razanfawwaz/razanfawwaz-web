import React from "react";
import Image from "next/image";
import TechStack from "./TechStack";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiSupabase,
} from "react-icons/si";

export default function AboutHero() {
  return (
    <div className="bg-slate-900 justify-center items-center">
      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-xl md:max-w-4xl lg:max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-gradient-to-r from-cyan-700 via-red-200 to-blue-800 background-animate rounded-lg h-1/2 md:h-76 lg:h-72 w-96 md:w-[90%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center px-12 py-12 lg:py-0 outline outline-4 outline-red-700/40">
            <div className="mx-auto object-left ml-4">
              <Image
                src={"/images/profile.png"}
                width={256}
                height={280}
                alt="memoji"
              />
            </div>
            <div className="text-center lg:text-right lg:-ml-8 ">
              <h1 className="text-4xl lg:text-6xl font-pjs font-extrabold lg:font-bold text-white">
                Muhammad
              </h1>
              <h1 className="text-4xl lg:text-6xl font-pjs font-extrabold lg:font-bold text-white ">
                Razan Fawwaz
              </h1>
              <p className="text-sm mt-2 text-white/80">
                Undergraduate Informatics Student at{" "}
                <a
                  href="https://usk.ac.id"
                  className="text-orange-100 font-bold no-underline hover:underline-offset-2 hover:underline-blue hover:underline hover:transition-all duration-200"
                >
                  Universitas Syiah Kuala
                </a>
              </p>
              <p className="text-sm text-white/80">
                Co-Founder of{" "}
                <a
                  href="https://bersinarproject.com"
                  className="text-yellow-200 font-bold no-underline hover:underline-offset-2 hover:underline-blue hover:underline hover:transition-all duration-200"
                >
                  Bersinar
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex justify-center items-center py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <p className="font-pjs text-4xl text-white font-bold underline decoration-sky-500 text-center">
            Hello World!
          </p>
          <p className="py-4 px-8 text-lg text-white/80 text-left">
            Hi! I{`'`}m Muhammad Razan Fawwaz, undergraduate student at
            Universitas Syiah Kuala majoring in Informatics. <br /> <br />{" "}
            Currently active at Bersinar Project as co-founder and IT Staff. I
            am always looking for new challenges to learn new technologies.
            Passionate in Web-Dev, Design, and watching Aircrash Investigation.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex justify-between items-center py-4 grid grid-cols-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="">
            <p className="font-pjs text-4xl text-white font-bold underline decoration-sky-500 text-center">
              Tech Stack
            </p>
            <p className="text-md text-white/80 text-center mt-2">
              Tech stack that I currently learn and use.
            </p>
          </div>
          <div className="grid grid-cols-2 py-4 md:py-0 lg:py-0 xl:py-0 gap-0 lg:gap-2">
            <TechStack title="HTML">
              <SiHtml5 />
            </TechStack>
            <TechStack title="CSS">
              <SiCss3 />
            </TechStack>
            <TechStack title="TailwindCSS">
              <SiTailwindcss />
            </TechStack>
            <TechStack title="Java Script">
              <SiJavascript />
            </TechStack>
            <TechStack title="ReactJS">
              <SiReact />
            </TechStack>
            <TechStack title="PHP">
              <SiPhp />
            </TechStack>
            <TechStack title="Laravel">
              <SiLaravel />
            </TechStack>
            <TechStack title="Supabase">
              <SiSupabase />
            </TechStack>
            <TechStack title="Github">
              <SiGithub />
            </TechStack>
            <TechStack title="Vercel">
              <SiVercel />
            </TechStack>
          </div>
        </div>
      </div>
    </div>
  );
}
