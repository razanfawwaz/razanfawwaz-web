import React from "react";
import Link from "next/link";

export default function NavLink({ path, children }) {
  return (
    <Link href={`/${path}`}>
      <a className=" px-4 py-2 hover:bg-slate-500/20 rounded-md hover:text-white/80 hover:outline hover:outline-2 hover:outline-slate-500 text-white/60 font-pjs font-semibold">
        {children}
      </a>
    </Link>
  );
}
