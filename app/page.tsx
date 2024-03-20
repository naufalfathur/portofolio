import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import SoftwareProjects from "@/components/sections/software-projects";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <SoftwareProjects/>
      <Contact/>
    </main>
  );
}
