import About from "@/components/app/about";
import Agency from "@/components/app/agency";
import Contact from "@/components/app/contact";
import Hero from "@/components/app/hero";
import ProjectGrid from "@/components/app/projectGrid";
import FadeUpMotion from "@/components/ui/fade-up-motion";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { LazyMotion, domAnimation } from "motion/react"

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "projects", component: <ProjectGrid isFeatured={true} withTitle={true} /> },
  { id: "agency", component: <Agency /> },
  { id: "contact", component: <Contact /> },
]

export default function Home() {
  return (
    <main className="flex min-h-screen md:w-full flex-col items-center justify-between  relative">
      <div className="absolute inset dot z-1 pointer-events-none"></div>

      <Navbar />

      <LazyMotion features={domAnimation}>

        <div className="md:hidden">
          {sections.map((section) => (
            <div id={section.id} key={section.id} className="w-full">
              {section.component}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          {sections.map((section) => (
            <div id={section.id} key={section.id} className="w-full">
              <FadeUpMotion>
                {section.component}
              </FadeUpMotion>
            </div>
          ))}
        </div>
      </LazyMotion>
      <Footer />
    </main>
  );
}
