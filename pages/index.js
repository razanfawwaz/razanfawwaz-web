import Hero from "../components/Hero/Hero";
import HeroCards from "../components/HeroCards/HeroCards";
import Navbar from "../components/Navbar/Navbar";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <PageHead pagetitle={"Home"} />
      <Navbar />
      <Hero />
      <HeroCards />
    </div>
  );
}
