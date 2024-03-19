"use client";
import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Project from "@/components/sections/project";
import Contact from "@/components/sections/contact";

const Main = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE } = await import("tw-elements");
      initTWE({ Tooltip });
    };
    init();
  }, []);

  return (
   <main className="flex flex-col items-center" 
   data-twe-animation-init 
   data-twe-animation-reset="true"  
   data-twe-animation="[slide-right_1s_ease-in-out]"
   data-twe-animation-start="onLoad"  >
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </main>
  );
};

export default Main;