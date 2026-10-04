import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { ShippedProjects } from "@/components/sections/shipped-projects";
import { OngoingProjects } from "@/components/sections/ongoing-projects";
import { Engineering } from "@/components/sections/engineering";
import { Writing } from "@/components/sections/writing";
import { Currently } from "@/components/sections/currently";
import { About } from "@/components/sections/about";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ShippedProjects />
      <OngoingProjects />
      <Engineering />
      <Writing />
      <Currently />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
