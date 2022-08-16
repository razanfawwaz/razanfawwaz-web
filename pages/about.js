import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import Navbar from "../components/Navbar/Navbar";
import PageHead from "../components/PageHead";

export default function About() {
  return (
    <>
      <PageHead pagetitle={"About"} />
      <Navbar />
      <AboutHero />
    </>
  );
}
