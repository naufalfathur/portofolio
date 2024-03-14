import React from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'

function About() {
  return (
    <div className='container flex flex-col w-1/2 space-y-3 min-h-screen justify-center' id='about'>
      <div className='flex flex-row space-x-6'>
      <p className="font-bold text-slate-500 min-w-fit">About me</p> <Separator className="my-4" />
      </div>
      <h2 className="animate-pulse scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent">
        I craft engaging and responsive UIs for web,<br></br> mobile, and multi-platform apps, bringing your<br></br> digital solutions to life. </h2>
      <div className='flex flex-row justify-between space-x-2 py-4'>
        <p className='w-[55%] text-justify'> With over 2 years of professional experience as a front-end developer, I leverage creativity and technical expertise to deliver
          sleek interfaces that drive results.
          <br></br>
          <br></br>
          My toolbox? HTML, React, Next.js, Flutter, Figma, Canva, and seamless Google Analytics/Tag Manager
          integration for insightful data analysis.
          <br></br>
          <br></br>
          Looking for: Projects that combine innovation and problem-solving, allowing me to collaborate
          with passionate teams and build impactful experiences.
          <br></br>
          <br></br>
          Ready to discuss your next project? Contact me today!</p>
        <div className='block place-self-cente'>
          <Image
            alt=''
            src={"/profile.jpeg"}
            width={300} height={0}
            className='rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

export default About