import React from "react";
import Image from "next/image";
import HeroLink from "./HeroLink";

export default function Hero() {
  return (
    <div className="bg-slate-900 justify-center items-center">
      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-xl md:max-w-4xl lg:max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-gradient-to-r from-red-300 via-pink-700 via red-600 to-pink-800 background-animate rounded-lg h-1/2 md:h-76 lg:h-72 w-96 md:w-[90%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center px-12 py-12 lg:py-0 outline outline-4 outline-red-700/40">
            <div className="mx-auto object-left ml-4 lg:-ml-12 bounce">
              <Image
                src={"/images/memoji.webp"}
                width={250}
                height={250}
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
      </div>
    </div>
  );
}
