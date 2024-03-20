import React from 'react'
import { Bitter } from "next/font/google";
import { MoveRight } from 'lucide-react';
const bitter = Bitter({ subsets: ["latin"] });
import { projectList } from '../../public/data/software-projects'
import Image from 'next/image'

function SoftwareProjects() {
  return (
    <div className='w-full h-full py-20 px-[10vw] flex flex-row justify-between'>

      <div className='w-1/4 space-y-2'>
        <h2 className={`text-3xl font-extrabold ` + bitter.className}> My Software Project</h2>
        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn btn-outline">
          View All Projects
          <MoveRight />
        </button>
      </div>

      <div className=' grid grid-cols-2 gap-4'>
        {projectList.slice(0, 4).map((project, i) => (
          <div className="card w-80 h-[400px] bg-base-100 shadow-xl image-full ">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body flex flex-col justify-end transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-gradient-to-b hover:from-transparent  hover:to-zinc-800/50 rounded-xl ">
            <h2 className="card-title">{project.name}</h2>
            <p className='!grow-0'>{project.descTitle}</p>
          </div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default SoftwareProjects