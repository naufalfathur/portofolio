import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { projectList } from '@/public/data/projects';
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

function ProjectsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <Navbar />
            <div className='px-[15vw] space-y-4 py-10 text-center'>

                <h2 className={`text-3xl font-extrabold ` + bitter.className}> Showcase All Project</h2>
                <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=' grid gap-4 grid-cols-4'>
                    {projectList.map((project, i) => (
                        <a href={`/project/${project.name}`} key={i}>
                            <div className="card w-80 h-[400px] bg-base-100 shadow-xl image-full " >
                                <figure><img src={project.img} alt={project.name} /></figure>
                                <div className="card-body flex flex-col justify-end transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-gradient-to-b hover:from-transparent  hover:to-zinc-800/50 rounded-xl cursor-pointer ">
                                    <h2 className={`text-2xl font-extrabold card-title `} >{project.name}</h2>
                                    <p className='!grow-0'>{project.descTitle}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default ProjectsPage