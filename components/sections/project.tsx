import React from 'react'
import { projectList } from '../../public/data/projects'
import Image from 'next/image'
function Project() {
    return (
        <div className='container flex flex-col w-1/2 min-h-screen justify-center text-center py-20' id='project'>
            <p className="font-bold text-slate-500 text-end">Projects</p>
            <h2 className="animate-pulse scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent text-end mb-4">
                Some Things I’ve Built</h2>
            {projectList.map((project, i) => (
                <div className={`container  py-8 px-9 rounded-xl my-4 flex bg-gray-900/40 ${i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}`} key={i}>
                    <div className='w-2/5 '>
                        <Image
                            alt=''
                            src={project.img}
                            width={400} height={0}
                        />
                    </div>

                    <div className='flex flex-col w-3/5  text-start'>
                        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl text-blue-500 w-full my-1">
                            {project.name}
                        </h2>
                        <p className="font-bold text-slate-500 ">{project.url}</p>

                        <h2 className=" text-xl font-reguler w-full text-justify my-4">
                            {project.descTitle}
                        </h2>

                        <ul className='list-disc container space-y-2 text-sm text-muted-foreground '>
                            {project.desc.map((list, i) => (
                                <li key={i}>{list}</li>
                            ))}
                        </ul>



                        <div className='w-full flex flex-row space-x-2 mt-4'>
                            {project.technologies.map((tech, i) => (
                                <div className='my-4  w-fit py-1 px-6 border-2 border-white/10 rounded-md bg-white/10' key={i}>
                                    <p className="font-bold ">{tech}</p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            ))}

        </div>
    )
}

export default Project