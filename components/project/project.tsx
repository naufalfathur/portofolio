import { TProject } from '@/types'
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });


interface ProjectProps {
  project: TProject
}

function Project({ project }: ProjectProps) {
  return (
    <div className='space-y-4'>

      <div className="card w-full h-[600px] bg-base-100 shadow-xl image-full ">
        <figure><img src={project.img} alt="Shoes"/></figure>
        <div className="card-body flex flex-col justify-end rounded-xl cursor-pointer ">
          <h2 className={`text-5xl font-extrabold card-title capitalize`} >{project.name}</h2>
        </div>
      </div>

      <h2 className={`text-3xl font-extrabold ` + bitter.className}> Techstacks</h2>
      

    </div>
  )
}

export default Project