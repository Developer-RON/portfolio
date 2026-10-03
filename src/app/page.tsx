import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Engineering } from "@/components/sections/engineering";
import { About } from "@/components/sections/about";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedProjects />
      <Engineering />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
