import Hero from "../components/Hero/Hero";
import HeroCards from "../components/HeroCards/HeroCards";
import Navbar from "../components/Navbar/Navbar";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <div>
      <PageHead pagetitle={"Home"} />
      <Navbar />
      <Hero />
      <HeroCards />
    </div>
  );
}
