import Contact from '@/components/app/contact';
import Project from '@/components/project/project';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>; // 👈 important: Promise
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="my-16 w-full">
        {slug ?
          <Project slug={slug} /> :
          <div>Invalid Project</div>
        }
      </div>
      <Contact />
      <Footer />
    </main>
  );
}