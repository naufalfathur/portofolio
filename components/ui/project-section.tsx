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
        <div className='w-full h-full py-20 px-[10vw] flex flex-row justify-between'>

            {titleOnLeft &&
                <div className='w-1/4 flex flex-col  space-y-2'>
                    <h2 className={`text-3xl font-extrabold ` + bitter.className}> {title}</h2>
                    <p className='text-sm font-light'>{desc}</p>
                    <Link href="/project">
                        <button className="btn btn-outline">
                            View All Projects
                            <MoveRight />
                        </button>
                    </Link>
                </div>
            }

            <div className=' grid grid-cols-2 gap-4'>
                {filteredObjects.map((project, i) => (
                    <Link href={`/project/${project.name}`} key={i}>
                        <div className="card w-80 h-[400px] bg-base-100 shadow-xl image-full " >
                            <figure>
                                <Image
                                    src={project.img}
                                    alt={project.name}
                                    width={400}
                                    height={0}
                                    quality={90}
                                />
                            </figure>
                            <div className="card-body flex flex-col justify-end transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-gradient-to-b hover:from-transparent  hover:to-zinc-800/50 rounded-xl cursor-pointer ">
                                <h2 className={`text-2xl font-extrabold card-title `} >{project.name}</h2>
                                <p className='!grow-0'>{project.descTitle}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

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