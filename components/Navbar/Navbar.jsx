/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NavLink from "./NavLink";
import { VscHome, VscAccount, VscCode, VscMail } from "react-icons/vsc";
import MobNavLink from "./MobNavLink";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="bg-slate-900 py-3 border-b-2 border-slate-500/40">
        <div className="container mx-auto max-w-xl lg:max-w-7xl flex justify-center lg:justify-between">
          <a className="text-white text-lg py-3 font-semibold px-4">
            razanfawwaz
          </a>
          <div className="flex justify-between hidden lg:block py-3">
            <NavLink path="/">Home</NavLink>
            <NavLink path="/about">About</NavLink>
            <NavLink path="/projects">Projects</NavLink>
            <NavLink path="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
      <div className="z-10 fixed bg-slate-500 backdrop-filter backdrop-blur-lg bg-opacity-10 w-full lg:hidden px-8 py-4 bottom-0 mx-auto border-t-4 border-slate-500/40">
        <div className="flex justify-between">
          <MobNavLink path={"/"}>
            <VscHome />
          </MobNavLink>
          <MobNavLink path={"/about"}>
            <VscAccount />
          </MobNavLink>
          <MobNavLink path={"/projects"}>
            <VscCode />
          </MobNavLink>
          <MobNavLink path={"/contact"}>
            <VscMail />
          </MobNavLink>
        </div>
      </div>
    </>
  );
}
