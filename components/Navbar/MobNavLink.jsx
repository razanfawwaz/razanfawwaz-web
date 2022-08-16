import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobNavLink({ path, children }) {
  const router = useRouter();
  return (
    <Link href={`/${path}`}>
      <a
        className={`px-6 py-2 rounded-md text-white/80 font-pjs font-semibold text-lg ${
          router.asPath === path ? "bg-slate-900" : "bg-slate-900/40"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
