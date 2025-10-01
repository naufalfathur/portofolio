import Contact from '@/components/app/contact';
import Project from '@/components/project/project';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import React from 'react';
import { LazyMotion, domAnimation } from "motion/react"
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <LazyMotion features={domAnimation}>
        <div className="my-16 w-full fade-in">
          {slug ?
            <Project slug={slug} /> :
            <div>Invalid Project</div>
          }
        </div>
      </LazyMotion>
      <Contact />
      <Footer />
    </main>
  );
}