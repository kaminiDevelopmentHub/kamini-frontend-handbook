import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}