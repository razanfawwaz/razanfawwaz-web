import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import HeroCards from "../components/HeroCards/HeroCards";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCards />
    </div>
  );
}
