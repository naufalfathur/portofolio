'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TProject } from '@/types';
import { ArrowCircle } from '@/public/svgs';
import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';
import * as m from "motion/react-m"

const ProjectContent = {
    title: "Selected Works",
    desc: "A curated selection of projects showcasing my work across design, development, and digital strategy. Each project reflects a different challenge, from concept to execution."
}

interface ProjectGridProps {
    isFeatured: boolean,
    withTitle: boolean,
}

function ProjectGrid({ isFeatured, withTitle }: ProjectGridProps) {
    const [projectsData, setProjectsData] = useState<TProject[]>([])
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then((data: TProject[]) => {
                let projects = isFeatured ? data.filter(project => project.featured) : data;
                projects = projects.sort((a, b) => new Date(b.ProjectDate).getTime() - new Date(a.ProjectDate).getTime());
                setProjectsData(projects);
            })
            .catch(err => console.error('Error fetching from API:', err));
    }, []);

    return (
        <LiquidGlassProvider >

            {isHovered && <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute overlay-card pointer-events-none"
                aria-hidden
            />}

            <div className="w-full max-w-6xl mx-auto space-y-8 my-20 p-6 h-full relative">


                {withTitle && (<div className='flex flex-col space-y-8 text-left items-center'>
                    <div className="grid grid-cols-3 w-full ">
                        <div className="flex-col items-start col-span-2 space-y-2">
                            <h2 className={`text-5xl font-extrabold`}>{ProjectContent.title}</h2>
                            <p className='text-sm font-light text-justify '>{ProjectContent.desc}</p>
                        </div>
                        <div className="col-span-1 text-end content-end">
                            <Link href="/project" className=''>
                                <button className="bg-[#1F2937] rounded-xl text-white py-2 px-8 shadow-xl w-fit popup-fade cursor-pointer">
                                    <div className="flex space-x-2 items-center">
                                        <span className="text-xs font-bold">View All Projects</span>
                                        <ArrowCircle className='-rotate-45' width={30} height={30} circFill='#B2B2B232' />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='divider'></div>
                </div>)}

                <div className=' grid grid-cols-2 gap-4'>
                    {projectsData.map((project, i) => (
                        <Link href={`/project/${project.slug}`} key={i}>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="card w-full h-[480px] glass !shadow-xl cursor-pointer relative overflow-clip hover:z-[200]" >
                                <LiquidGlassFilters />
                                <div className="flex-col space-y-2 justify-center items-center  p-12">
                                    <div className="flex justify-between space-x-5">
                                        <h2 className={`text-2xl font-extrabold card-title `} >{project.name}</h2>
                                        <ArrowCircle className='-rotate-45' width={50} height={50} circFill='#B2B2B232' />
                                    </div>
                                    <p className='text-sm text-justify text-slate-500 font-light'>{project.descTitle}</p>
                                </div>
                                <m.div
                                    initial={{ y: -200 }}
                                    whileHover={{ y: -230 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.8,
                                    }}
                                    className=''>
                                    <div className='w-full justify-center flex pt-44'>
                                        <Image
                                            src={project.thumbnail?.fields.file.url ? ('https:' + project.thumbnail.fields.file.url) : '/logo.svg'}
                                            alt={project.name}
                                            width={450}
                                            height={0}
                                            quality={90}
                                            className='rounded-xl'
                                        />
                                    </div>
                                </m.div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </LiquidGlassProvider>
    )
}

export default ProjectGrid