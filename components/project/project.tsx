import { TProject } from '@/types'
import React from 'react'
import { Bitter } from "next/font/google";
import { techstackList } from '@/public/data/techstacks';
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import Form from '../ui/form';
import parse from 'html-react-parser';
import FadeUpMotion from '../ui/fade-up-motion';

interface ProjectProps {
  project: TProject
}

function Project({ project }: ProjectProps) {
  return (
    <div className='md:px-[20vw] space-y-4 py-10 px-4'>

      <FadeUpMotion>

        <div className="card w-full md:h-[65vh] h-[40vh] bg-base-100 shadow-xl image-full ">
          <figure>
            <Image
              src={project.img}
              alt={project.name}
              width={0}
              height={0}
              sizes='100vw'
              quality={90}
              style={{ width: 'auto', height: '100%' }}
            />
          </figure>
          <div className="card-body flex flex-col justify-end rounded-xl cursor-pointer ">
            {project.featured &&
              <div className={`badge capitalize badge-primary`}>Featured</div>
            }
            <h2 className={'md:text-8xl text-4xl font-extrabold card-title uppercase'} >{project.name}</h2>
            {project.url.length > 0 &&
              <Link href={project.url} className="btn w-fit">
                Visit Site
                <MoveRight />
              </Link>}
          </div>
        </div>

      </FadeUpMotion>

      <FadeUpMotion>
        <div className='md:space-x-8 py-6 flex md:flex-row flex-col'>
          <article className="prose space-y-4  w-full">

            <h2 className={`text-xl font-extrabold ` + bitter.className}> Techstacks</h2>


            <div className='flex'>
              {project.technologies.map((tech, i) => (
                <div key={i}>
                  {
                    techstackList.filter((techstack) => techstack.name === tech).map(((techs, i) => (
                      <div className="tooltip" data-tip={techs.name} key={i}>
                        <Image
                          alt=''
                          src={techs.icon}
                          width={100} height={0}
                          quality={100}
                          className='w-20 h-10 saturate-0 icon'
                        />
                      </div>
                    )))
                  }
                </div>
              ))}
            </div>

            <div className='text-justify space-y-4 py-4'>
              <p className='text-justify font-bold'>{project.descTitle}</p>


              {project.desc.map((des, i) => (
                <ul key={i}>
                  <li>{parse(des)}</li>
                </ul>
              ))}
            </div>
          </article>

          <div className='md:w-1/2 space-y-4 py-10 md:px-10 '>

            <Form title='Interested with this project ?' />
          </div>
        </div>
      </FadeUpMotion>







    </div>
  )
}

export default Project