import About from "@/components/app/about";
import Agency from "@/components/app/agency";
import Contact from "@/components/app/contact";
import Experiences from "@/components/app/experiences";
import Extras from "@/components/app/extras";
import Hero from "@/components/app/hero";
import FadeInSection from "@/components/ui/fade-in-section";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ProjectSection from "@/components/ui/project-section";

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
        <ProjectSection
          title={"My Software Project"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          filter={"software"}
        />
      </FadeInSection>

      <FadeInSection>
        <Agency />
      </FadeInSection>

      <FadeInSection>
        <ProjectSection
          title={"My Website Project"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          filter={"website"}
          titleOnLeft={false}
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectSection
          title={"My UI/UX Project"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          filter={"ui/ux"}
        />
      </FadeInSection>

      {/* <Extras/> */}

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
    </main>
  );
}
