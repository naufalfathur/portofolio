'use client'
import React, { useEffect, useState } from 'react'
import { Bitter } from "next/font/google";
import { Key, MoveLeft, MoveRight } from 'lucide-react';
const bitter = Bitter({ subsets: ["latin"] });
import { projectList } from '../../public/data/projects'
import Image from 'next/image'
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowCircle } from '@/public/svgs';
import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';

const ProjectContent = {
    title: "Lorem ipsum  dolor sit amet consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

function ProjectGrid({ projects }: any) {
    const [highlightedProjectData, setHighlightedProjectData] = useState<Project[]>([])

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then((data: Project[]) => {
                const featuredProjects = data.filter(project => project.featured).reverse();
                setHighlightedProjectData(featuredProjects);
            })
            .catch(err => console.error('Error fetching from API:', err));
    }, []);

    const filteredObjects = projectList.reverse().slice(0, 6);
    return (
        <LiquidGlassProvider >
            <div className="relative">
                <div className="absolute inset-0 grids pointer-events-none -z-10"></div>
                <div className="w-full max-w-6xl mx-auto space-y-20 my-10 p-6 h-full">

                    <div className='flex flex-col space-y-2 text-center '>
                        <h2 className={`text-3xl font-extrabold ` + bitter.className}> {ProjectContent.title}</h2>
                        <p className='text-sm font-light'>{ProjectContent.desc}</p>
                        <Link href="/project" className=''>
                            <button className="btn btn-outline">
                                View All Projects
                                <MoveRight />
                            </button>
                        </Link>
                    </div>

                    <div className=' grid grid-cols-2 gap-4'>
                        {highlightedProjectData.map((project, i) => (
                            <Link href={`/project/${project.id}`} key={i}>
                                <div className="card w-full h-[480px] glass !shadow-xl cursor-pointer relative" >
                                    <LiquidGlassFilters />
                                    <div className="flex-col space-y-2 justify-center items-center  p-8">
                                        <div className="flex justify-between space-x-5">
                                            <h2 className={`text-2xl font-extrabold card-title `} >{project.name}</h2>
                                            <ArrowCircle className='-rotate-45' width={50} height={50} />
                                        </div>
                                        <p className='text-md text-justify text-slate-500'>{project.descTitle}</p>
                                    </div>
                                    <div className='absolute bottom-0 w-full justify-center flex'>
                                        <Image
                                            src={project.thumbnail?.fields.file.url ? ('https:/' + project.thumbnail.fields.file.url) : '/logo.svg'}
                                            alt={project.name}
                                            width={450}
                                            height={0}
                                            quality={90}
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </LiquidGlassProvider>
    )
}

export default ProjectGrid