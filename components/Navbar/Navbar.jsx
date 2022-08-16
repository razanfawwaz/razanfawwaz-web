import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="bg-slate-900 py-3 border-b-2 border-slate-500/40">
        <div className="container mx-auto max-w-xl lg:max-w-7xl flex justify-between">
          <a className="text-white text-lg py-3 font-semibold px-4">
            razanfawwaz
          </a>
          <div className="flex justify-between hidden lg:block py-3">
            <NavLink path="about">About</NavLink>
            <NavLink path="projects">Projects</NavLink>
            <NavLink path="contact">Contact</NavLink>
          </div>
          <div className="pr-2 lg:pr-0 mt-2 lg:hidden">
            <div
              onClick={() => setOffcanvas(true)}
              className="px-5 py-2 bg-slate-500/20 rounded-md text-white/60"
            >
              <FaBars className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
