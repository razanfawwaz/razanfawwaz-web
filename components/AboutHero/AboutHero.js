import React from "react";
import Image from "next/image";
import TechStack from "./TechStack";
import HeroLink from "../Hero/HeroLink";
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
  SiGo,
  SiGooglecloud,
} from "react-icons/si";

export default function AboutHero() {
  return (
    <div className="bg-slate-900 justify-center items-center">
      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-xl md:max-w-4xl lg:max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-gradient-to-r from-cyan-700 via-red-200 to-blue-800 background-animate rounded-lg h-1/2 md:h-76 lg:h-72 w-96 md:w-[90%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center px-12 py-12 lg:py-0 outline outline-4 outline-red-700/40">
            <div className="mx-auto object-left ml-4 bounce">
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
              <HeroLink
                color="text-orange-100"
                link="https://usk.ac.id"
                position="Undergraduate Informatics Student at"
                company="Universitas Syiah Kuala"
              />
              <HeroLink
                color="text-orange-200"
                link="https://bersinarproject.co.id"
                position="Co-Founder"
                company="Bersinar"
              />
              <HeroLink
                color="text-green-300"
                link="https://gdsc.community.dev/syiah-kuala-university/"
                position="Chapter Lead"
                company="Google Developer Student Club - USK"
              />
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
        <div className="max-w-lg mx-auto flex justify-between items-center py-4 grid grid grid-cols-1 ">
          <div className="">
            <p className="font-pjs text-4xl text-white font-bold underline decoration-sky-500 text-center">
              Tech Stack
            </p>
            <p className="text-md text-white/80 text-center mt-2">
              Tech stack that I currently learn and use.
            </p>
          </div>
          <div className="grid grid-cols-2 py-4 mt-4 md:py-0 lg:py-0 xl:py-0 gap-0 lg:gap-2">
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
            <TechStack title="Golang">
              <SiGo />
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
            <TechStack title="Google Cloud">
              <SiGooglecloud />
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
