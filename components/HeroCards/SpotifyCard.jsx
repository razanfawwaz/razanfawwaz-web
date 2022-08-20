/* eslint-disable @next/next/no-img-element */
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

export default function SpotifyCard() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <Link href={"https://open.spotify.com/user/razanfawwaz"}>
      <a target={"_blank"}>
        <div className="relative bg-gradient-to-br from-gray-700 via-gray-900 to-slate-600 background-animate rounded-lg h-44 w-96 md:w-[98%] lg:w-[125%] flex items-center px-12 py-12 lg:py-0 outline outline-4 outline-slate-500/30">
          {data?.isPlaying ? (
            <>
              <div className="-ml-4 -mt-4">
                <p className="text-white font-xs font-pjs font-semibold py-2">
                  Now Listening:
                </p>
                <div className="w-20">
                  <img
                    className="mt-2 w-20 shadow-sm"
                    src={data?.albumImageUrl}
                    alt={data?.album}
                  />
                </div>
              </div>
              <div className="ml-4 lg:ml-0 mt-7">
                <p className="text-lg text-white font-bold">{data?.title}</p>
                <p className="text-md text-white">{data?.album}</p>
                <p className="text-sm text-white">{data?.artist}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex mx-auto justify-center items-center text-center">
                <p className="text-xl text-center text-white font-bold">
                  Not playing
                </p>
              </div>
            </>
          )}
          <div className="text-white/40 text-right absolute bottom-0 right-0 text-3xl py-4 px-4">
            <FaSpotify />
          </div>
        </div>
      </a>
    </Link>
  );
}
