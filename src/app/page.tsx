import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Intro } from "@/components/home/Intro";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Capabilities } from "@/components/home/Capabilities";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <FeaturedWork />
      <Capabilities />
    </>
  );
}
