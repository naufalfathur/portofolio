import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About/>
      <Experience/>
    </main>
  );
}
