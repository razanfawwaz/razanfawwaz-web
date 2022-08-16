import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-slate-900 justify-center items-center">
      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-xl md:max-w-4xl lg:max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-gradient-to-r from-red-300 via-pink-700 via red-600 to-pink-800 background-animate rounded-lg h-1/2 md:h-76 lg:h-72 w-96 md:w-[90%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center px-12 py-12 lg:py-0 outline outline-4 outline-red-700/40">
            <div className="mx-auto object-left ml-4 lg:-ml-12">
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
      </div>
    </div>
  );
}
