import React from 'react'
import { Bitter } from "next/font/google";
import { Key, MoveLeft, MoveRight } from 'lucide-react';
const bitter = Bitter({ subsets: ["latin"] });
import { projectList } from '../../public/data/projects'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectSectionProps {
    title: string,
    desc: string,
    filter: string,
    titleOnLeft?: boolean
}

function ProjectSection({ title, desc, filter, titleOnLeft = true }: ProjectSectionProps) {
    const filteredObjects = projectList.filter((project) => project.type === filter).reverse().slice(0, 4);

    return (
        <div className='w-full h-full py-20 md:px-[10vw] px-4 flex md:flex-row flex-col justify-between space-y-4 md:space-y-0'>

            {titleOnLeft &&
                <div className='md:w-1/4 flex flex-col space-y-2 md:text-left text-center '>
                    <h2 className={`text-3xl font-extrabold ` + bitter.className}> {title}</h2>
                    <p className='text-sm font-light'>{desc}</p>
                    <Link href="/project" className='hidden md:flex'>
                        <button className="btn btn-outline">
                            View All Projects
                            <MoveRight />
                        </button>
                    </Link>
                </div>
            }

            <>
                <div className='grid grid-cols-2 gap-4'>
                    {filteredObjects.map((project, i) => (
                        <Link href={`/project/${project.id}`} key={i}>
                            <div className="card md:w-80 md:h-[400px] h-[300px] bg-base-100 shadow-xl image-full " >
                                <figure>
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={400}
                                        height={0}
                                        quality={90}
                                    />
                                </figure>
                                <div className="card-body flex flex-col justify-end transition ease-in-out md:bg-transparent bg-black/40 md:hover:-translate-y-1 duration-300 md:hover:bg-gradient-to-b md:hover:from-transparent  md:hover:to-zinc-800/50 rounded-xl cursor-pointer ">
                                    <h2 className={`md:text-2xl text-base font-extrabold card-title `} >{project.name}</h2>
                                    <p className='!grow-0 md:text-base text-xs '>{project.descTitle}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href="/project" className='md:hidden'>
                    <button className="btn btn-outline md:w-fit w-full">
                        View All Projects
                        <MoveRight />
                    </button>
                </Link>
            </>

            {titleOnLeft === false &&
                <div className='w-1/4 flex flex-col space-y-2 text-right'>
                    <h2 className={`text-3xl font-extrabold ` + bitter.className}> {title}</h2>
                    <p className='text-sm font-light'>{desc}</p>
                    <Link href="/project">
                        <button className="btn btn-outline">

                            <MoveLeft />
                            View All Projects
                        </button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default ProjectSection