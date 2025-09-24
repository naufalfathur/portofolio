import React from 'react'
import Image from 'next/image'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import { techstackList } from '../../public/data/techstacks'

const achievements = [
  {
    award: 'Vice Chansellor Award',
    awardee: 'University Putra Malaysia',
  },
  {
    award: 'Dean\'s List (3 Semesters)',
    awardee: 'University Putra Malaysia',
  },
  {
    award: 'IEEE Final Year Project Finalist',
    awardee: 'IEEE Malaysia',
  },
  {
    award: 'Quality Champion',
    awardee: 'TDCX (Google Tag Team)',
  },
  {
    award: 'Bicentenary Global Futures Scholarship',
    awardee: 'University of Manchester',
  },
  {
    award: 'Best Startup Pitch',
    awardee: 'University of Manchester',
  },
]

function About() {
  return (
    <div id={'about'} className='about w-full max-w-6xl mx-auto px-6 h-[40vh] items-center justify-center flex flex-col'>

      {/* <div className='md:hidden flex-col space-y-4'>
        <h2 className={`text-3xl font-extrabold ` + bitter.className}> Let&apos;s build something impactful.</h2>
        <p className='text-justify text-xs'>
          Experienced software developer (3+ years), building fast, user-focused websites, apps and MVPs.
          Currently pursuing an MSc in Innovation Management at the University of Manchester, I bridge tech and business to help startups and SMEs launch, scale, and innovate.
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


      </div> */}


      <div className='justify-center space-x-10'>
        <div className='space-y-4'>
          <h2 className={`text-3xl font-extrabold ` + bitter.className}> Let&apos;s build something impactful.</h2>
          <p className='text-justify text-xs'>
            Experienced software developer (3+ years), building fast, user-focused websites, apps and MVPs.
            Currently pursuing an MSc in Innovation Management at the University of Manchester, I bridge tech and business to help startups and SMEs launch, scale, and innovate.
            <br></br>
            <br></br>
            <strong>Got a project in mind?</strong>
            <br></br>
            Let&apos;s talk. I&apos;m open to freelance, part-time, or collaborative opportunities.
            Ready to discuss your next project? Contact me today!</p>
          <div className="carousel h-full w-full py-2 overflow-y-visible">
            <div className='items-center flex space-x-4'>
              {achievements.map((ach, i) => (
                <div className="carousel-item" key={i}>
                  <div className="glass-new text-xs !shadow-md !bg-slate-600/20">
                    {ach.award}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About