import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageHead from "../components/PageHead";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 mx-auto h-screen flex justify-center items-center">
        <PageHead pagetitle={"Projects"} />
        <h1 className="text-2xl text-center text-white">Still on Progress!</h1>
      </div>
    </>
  );
}