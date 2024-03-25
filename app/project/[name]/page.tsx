import Contact from '@/components/app/contact';
import Project from '@/components/project/project';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { projectList } from '@/public/data/projects';
import { TProject } from '@/types';
import React from 'react'

function ProjectPage( { params }: { params: { name: string } }) {
  const filteredObjects = projectList.filter((project) => project.name === decodeURI(params.name))[0] as TProject

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <Navbar/>
      {filteredObjects ? <Project project={filteredObjects}/> : <div>Invalid Project</div>}
      <Contact/>
      <Footer/>
    </main>
  )
}

export default ProjectPage