import React from 'react'
import Image from 'next/image'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import { techstackList } from '../../public/data/techstacks'

function About() {
  return (
    <div id={'about'} className='about w-full h-[80vh] px-[15vw] items-center justify-center flex flex-col'>

      <div className='md:hidden flex-col space-y-4'>
        <h2 className={`text-3xl font-extrabold ` + bitter.className}> Let&apos;s build something impactful.</h2>
        <p className='text-justify text-xs'>
          Experienced software developer (3+ years), building fast, user-focused websites, apps and MVPs.
          Currently pursuing an MSc in Innovation Management at the University of Manchester, I bridge tech and business to help startups and SMEs launch, scale, and innovate.
          <br></br>
          <br></br>
          <strong>What I bring to the table:</strong>
          <br></br>
          A hybrid skill set in development and strategic consulting, ranging from CMS builds and Laravel-based systems to digital 
          transformation, workflow automation, and product strategy.
          <br></br>
          <br></br>
          <strong>Got a project in mind?</strong>
          <br></br>
          Let&apos;s talk. I&apos;m open to freelance, part-time, or collaborative opportunities.
          Ready to discuss your next project? Contact me today!</p>
        <div className='flex'>
          <div className='block place-self-center w-1/2'>
            <Image
              alt=''
              src={"/profile2.png"}
              width={100} height={0}
              quality={100}
              className=''
            />
          </div>
          <div className='w-1/2 space-y-2'>
            <h2 className={`text-xl font-extrabold ` + bitter.className}> My Techstacks</h2>
            <div className='grid grid-flow-row grid-cols-5 gap-3'>
              {techstackList.map((tech, i) => (
                <div className="tooltip" data-tip={tech.name} key={i}>
                  <Image
                    alt=''
                    src={tech.icon}
                    width={80} height={0}
                    quality={100}
                    className='w-20 h-10 saturate-0 icon'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>


      <div className='hidden md:flex flex-row justify-center space-x-10 py-4 mt-8'>
        <div className='block place-self-center'>
          <Image
            alt=''
            src={"/profile2.png"}
            width={300} height={0}
            quality={100}
            className=''
          />
        </div>
        <div className='w-[55%] space-y-4'>
          <h2 className={`text-3xl font-extrabold ` + bitter.className}> Let&apos;s build something impactful.</h2>
          <p className='text-justify text-xs'>
          Experienced software developer (3+ years), building fast, user-focused websites, apps and MVPs.
            Currently pursuing an MSc in Innovation Management at the University of Manchester, I bridge tech and business to help startups and SMEs launch, scale, and innovate.
            <br></br>
            <br></br>
            <strong>What I bring to the table:</strong>
            <br></br>
            A hybrid skill set in development and strategic consulting, ranging from CMS builds and Laravel-based systems to digital 
            transformation, workflow automation, and product strategy.
            <br></br>
            <br></br>
            <strong>Got a project in mind?</strong>
            <br></br>
            Let&apos;s talk. I&apos;m open to freelance, part-time, or collaborative opportunities.
            Ready to discuss your next project? Contact me today!</p>
          <h2 className={`text-2xl font-extrabold ` + bitter.className}> My Techstacks</h2>
          <div className='flex space-x-4'>
            {techstackList.map((tech, i) => (
              <div className="tooltip" data-tip={tech.name} key={i}>
                <Image
                  alt=''
                  src={tech.icon}
                  width={80} height={0}
                  quality={100}
                  className='w-20 h-10 saturate-0 icon'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About