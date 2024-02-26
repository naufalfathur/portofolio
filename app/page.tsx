import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Project from "@/components/sections/project";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About/>
      <Experience/>
      <Project/>
    </main>
  );
}
