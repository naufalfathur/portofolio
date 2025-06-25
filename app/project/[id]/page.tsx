import Contact from '@/components/app/contact';
import Project from '@/components/project/project';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import { projectList } from '@/public/data/projects';
import { TProject } from '@/types';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>; // 👈 important: Promise
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params; // 👈 await the params
  const filteredObject = projectList.find((project) => project.id === id) as TProject | undefined;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {filteredObject ? <Project project={filteredObject} /> : <div>Invalid Project</div>}
      <Contact />
      <Footer />
    </main>
  );
}