/* eslint-disable @next/next/no-img-element */
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function GithubCard() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("https://api.github.com/users/razanfawwaz", fetcher);
  return (
    <Link href={"https://github.com/razanfawwaz"}>
      <a target={"_blank"}>
        <div className="relative bg-gradient-to-tr from-blue-600 via-fuschia-600 to-cyan-900 background-animate rounded-lg h-44 w-96 md:w-[98%] lg:w-full flex items-center px-12 py-12 lg:py-0 outline outline-4 outline-blue-800/60">
          <div className="flex justify-center items-center">
            <div className="-ml-8 -mt-4">
              <p className="text-white font-pjs font-semibold font-md py-2">
                Github Profile
              </p>
              <div className="w-20">
                <img
                  className="mt-2 w-20 shadow-sm rounded-full"
                  src={data?.avatar_url}
                  alt={"Github Profile"}
                />
              </div>
            </div>
            <div className="-ml-2 mt-7">
              <p className="text-sm text-white">
                <span className="text-lg font-bold "> {data?.login} </span>
              </p>
              <p className="text-sm text-white">
                Public Repository:
                <span className="text-lg font-bold ">
                  {" "}
                  {data?.public_repos}{" "}
                </span>
              </p>
              <p className="text-md text-white">{data?.artist}</p>
            </div>
          </div>
          <div className="text-white/40 text-right absolute bottom-0 right-0 text-3xl py-4 px-4">
            <FaGithub />
          </div>
        </div>
      </a>
    </Link>
  );
}
