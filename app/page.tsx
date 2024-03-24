import About from "@/components/app/about";
import Agency from "@/components/app/agency";
import Contact from "@/components/app/contact";
import Experiences from "@/components/app/experiences";
import Extras from "@/components/app/extras";
import Hero from "@/components/app/hero";
import SoftwareProjects from "@/components/app/software-projects";
import UIUXProjects from "@/components/app/ui-ux-projects";
import WebsiteProject from "@/components/app/website-projects";
import FadeInSection from "@/components/ui/fade-in-section";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">

      <Navbar />

      <Hero />
      <About />
      <Experiences />
      <SoftwareProjects />
      <Agency />
      <WebsiteProject />
      <UIUXProjects />
      {/* <Extras/> */}
      <Contact />
      <Footer />
    </main>
  );
}
