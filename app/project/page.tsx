import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { projectList } from '@/public/data/projects';
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';

function ProjectsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <Navbar />
            <div className='md:px-[15vw] px-4 space-y-4 py-24'>
                <h2 className={`text-3xl font-extrabold text-center w-full` + bitter.className}> All Project</h2>
                <p className='text-sm font-light text-center'>Showcase of my projects for clients and self development to create user-friendly and visually digital solutions.</p>
                <div className='grid gap-4 md:grid-cols-3 grid-cols-2 pt-10'>
                    {projectList.map((project, i) => (
                        <Link href={`/project/${project.id}`} key={i}>
                            <div className="card md:w-auto h-[300px] bg-black shadow-xl image-full" >
                                <figure>
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={0}
                                        height={0}
                                        sizes='100vh'
                                        quality={90}
                                        style={{ width: 'auto', height: '300px' }}
                                    />
                                </figure>
                                <div className="card-body flex flex-col justify-end transition ease-in-out md:bg-transparent bg-black/40 md:hover:-translate-y-1 duration-300 md:hover:bg-gradient-to-b md:hover:from-transparent  md:hover:to-zinc-800/50 rounded-xl cursor-pointer ">
                                    <div className={`badge capitalize ${project.type === 'software' ? 'badge-warning' : project.type === 'website' ? 'badge-success' : 'badge-neutral'}`}>{project.type}</div>
                                    <h2 className={`md:text-xl text-base font-extrabold card-title `} >{project.name}</h2>
                                    <p className='!grow-0 md:text-sm text-xs '>{project.descTitle}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default ProjectsPage