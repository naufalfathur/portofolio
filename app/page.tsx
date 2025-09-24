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

export default function Home() {
  return (
    <main className="flex min-h-screen md:w-full flex-col items-center justify-between  ">

      <Navbar />

      <div className="md:hidden">
        <Hero />
        <About />
        {/* <Experiences /> */}
        <ProjectSection
          title={"My Software Project"}
          desc={"I bring innovative ideas to life by building custom software applications that streamline processes and empower businesses."}
          filter={"software"}
        />
        <Agency />
        <ProjectSection
          title={"My Website Project"}
          desc={"Some of my projects for clients to create user-friendly and visually captivating websites."}
          filter={"website"}
        />
        <ProjectSection
          title={"My UI/UX Project"}
          desc={"I craft intuitive user interfaces (UI) and user experiences (UX)"}
          filter={"ui/ux"}
        />
        <Contact />
      </div>

      <div className="hidden md:block">
        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection>
          <About />
        </FadeInSection>

        {/* <FadeInSection>
          <Experiences />
        </FadeInSection> */}

        <FadeInSection>
          <ProjectSection
            title={"My Software Project"}
            desc={"I bring innovative ideas to life by building custom software applications that streamline processes and empower businesses."}
            filter={"software"}
          />
        </FadeInSection>

        <FadeInSection>
          <Agency />
        </FadeInSection>

        <FadeInSection>
          <ProjectSection
            title={"My Website Project"}
            desc={"Some of my projects for clients to create user-friendly and visually captivating websites."}
            filter={"website"}
            titleOnLeft={false}
          />
        </FadeInSection>

        <FadeInSection>
          <ProjectSection
            title={"My UI/UX Project"}
            desc={"I craft intuitive user interfaces (UI) and user experiences (UX)"}
            filter={"ui/ux"}
          />
        </FadeInSection>

        {/* <Extras/> */}

        <FadeInSection>
          <Contact />
        </FadeInSection>
      </div>



      <Footer />
    </main>
  );
}
