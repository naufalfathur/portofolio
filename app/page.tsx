import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </main>
  );
}
