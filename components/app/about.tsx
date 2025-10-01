import React from 'react'
import Image from 'next/image'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import { ArrowCircle } from '@/public/svgs';
import Link from 'next/link';

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
    <div id={'about'} className='about w-full max-w-[90rem] mx-auto px-20 py-16 items-center justify-center flex flex-col bg-[#1b232a] rounded-3xl border-2 border-white shadow-2xl'>

      <div className='flex w-full relative justify-center'>

        <div className="flex-2 flex-col space-y-2 absolute -bottom-5 left-0">
          {achievements.slice(0, 4).map((ach, i) => (
            <div key={i} className="bg-[#1F2937] rounded-xl text-white p-4 shadow-xl">
              <div className="flex space-x-2">
                <Image src="/laurel-wreath.svg" height={30} width={30} alt="award" quality={80} />
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{ach.award}</span>
                  <span className="text-xs font-light">{ach.awardee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-64 mr-80 px-10 text-white space-y-4">
          <h2 className={`text-3xl font-extrabold`}> Let&apos;s build something impactful.</h2>
          <p className='text-justify text-sm'>
            Experienced software developer (3+ years professional exp), building fast, user-focused websites, apps and MVPs. Having Bachelor of Software Engineering degree in University of Malaysia, and
            currently pursuing an MSc in Innovation Management at the University of Manchester, I bridge tech and business to help startups and SMEs launch, scale, and innovate.
          </p>
        </div>



        <div className='w-max flex-col space-y-2 absolute -top-24 -right-0 z-10 -rotate-6'>
          {achievements.slice(4,).map((ach, i) => (
            <div key={i} className="bg-[#1F2937] rounded-xl text-white p-4 shadow-xl">
              <div className="flex space-x-2">
                <Image src="/laurel-wreath.svg" height={30} width={30} alt="award" quality={80} />
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{ach.award}</span>
                  <span className="text-xs font-light">{ach.awardee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/cv" className=''>
          <button className="bg-white rounded-xl  p-4 shadow-xl w-[280px] absolute top-20 -right-0 popup-fade">
            <div className="flex space-x-2 justify-between">
              <div className="flex flex-col text-left">
                <span className="text-xs font-light">Want to know more?</span>
                <span className="text-xs font-bold">See my full experiences</span>
              </div>
              <ArrowCircle className='' />
            </div>
          </button>
        </Link>
      </div>



    </div>
  )
}

export default About