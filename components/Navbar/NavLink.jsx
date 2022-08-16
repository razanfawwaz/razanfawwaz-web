import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ path, children }) {
  const router = useRouter();

  return (
    <Link href={`${path}`}>
      <a
        className={`mx-2 px-4 py-2 hover:bg-slate-500/20 rounded-md hover:text-white/80 
      hover:outline hover:outline-2 hover:outline-slate-500 font-pjs font-semibold ${
        router.asPath === path
          ? "text-white bg-slate-500/20 outline outline-2 outline-slate-500"
          : "text-white/60"
      }`}
      >
        {children}
      </a>
    </Link>
  );
}
