import About from "@/components/sections/about";
import Agency from "@/components/sections/agency";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Extras from "@/components/sections/extras";
import Hero from "@/components/sections/hero";
import SoftwareProjects from "@/components/sections/software-projects";
import UIUXProjects from "@/components/sections/ui-ux-projects";
import WebsiteProject from "@/components/sections/website-projects";
import FadeInSection from "@/components/ui/fade-in-section";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">

      <Navbar />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Experiences />
      </FadeInSection>

      <FadeInSection>
        <SoftwareProjects />
      </FadeInSection>

      <FadeInSection>
        <Agency />
      </FadeInSection>

      <FadeInSection>
        <WebsiteProject />
      </FadeInSection>

      <FadeInSection>
        <UIUXProjects />
      </FadeInSection>

      {/* <Extras/> */}

      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </main>
  );
}
