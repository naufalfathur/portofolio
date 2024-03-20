import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='bg-neutral w-full h-[80vh] px-[20vw] items-center justify-center flex flex-col'>

      <h2 className="animate-pulse scroll-m-20 text-3xl font-bold tracking-tight text-neutral-content text-center">
        I craft engaging and responsive UIs for web, mobile, and multi-platform apps,<br></br> bringing your digital solutions to life. </h2>

      <div className='flex flex-row justify-between space-x-2 py-4 mt-8'>
        <div className='block place-self-center'>
          <Image
            alt=''
            src={"/profile.jpeg"}
            width={300} height={0}
            className='rounded-full'
          />
        </div>
       <div className='w-[55%] space-y-4'>
       <div className="badge badge-primary badge-outline"> About Me </div>
       <p className='text-justify text-neutral-content '> With over 2 years of professional experience as a front-end developer, I leverage creativity and technical expertise to deliver
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
       </div>

      </div>
    </div>
  )
}

export default About