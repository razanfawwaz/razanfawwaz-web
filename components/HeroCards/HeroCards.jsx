/* eslint-disable @next/next/no-img-element */
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import SpotifyCard from "./SpotifyCard";
import GithubCard from "./GithubCard";

export default function HeroCards() {
  return (
    <div className="bg-slate-900 pb-20">
      <div className="mt-max-w-xl md:max-w-4xl lg:max-w-4xl mx-auto flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center px-4 md:px-9 lg:px-0 gap-8 flex justify-center items-center">
        <SpotifyCard />
        <GithubCard />
      </div>
    </div>
  );
}
