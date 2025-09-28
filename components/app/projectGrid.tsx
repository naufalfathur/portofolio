'use client'
import React, { useEffect, useState } from 'react'
import { Bitter } from "next/font/google";
import { Key, MoveLeft, MoveRight } from 'lucide-react';
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';
import { TProject } from '@/types';
import { ArrowCircle } from '@/public/svgs';
import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';
import { motion } from 'framer-motion';

const ProjectContent = {
    title: "Lorem ipsum  dolor sit amet consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

            {isHovered && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute overlay-card pointer-events-none"
                aria-hidden
            />}

            <div className="w-full max-w-6xl mx-auto space-y-20 my-10 p-6 h-full relative">


                {withTitle && (<div className='flex flex-col space-y-2 text-center '>
                    <h2 className={`text-3xl font-extrabold ` + bitter.className}> {ProjectContent.title}</h2>
                    <p className='text-sm font-light'>{ProjectContent.desc}</p>
                    <Link href="/project" className=''>
                        <button className="btn btn-outline">
                            View All Projects
                            <MoveRight />
                        </button>
                    </Link>
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
                                <motion.div
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
                                </motion.div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </LiquidGlassProvider>
    )
}

export default ProjectGrid