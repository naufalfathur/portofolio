import About from "@/components/sections/about";
import Agency from "@/components/sections/agency";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Extras from "@/components/sections/extras";
import Hero from "@/components/sections/hero";
import SoftwareProjects from "@/components/sections/software-projects";
import WebsiteProject from "@/components/sections/website-projects";
import Footer from "@/components/ui/footer";
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
      <Agency/>
      <WebsiteProject/>
      {/* <Extras/> */}
      <Contact/>
      <Footer/>
    </main>
  );
}
