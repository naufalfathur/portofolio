import React from 'react'
import Image from 'next/image'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

function About() {
  return (
    <div className='w-full h-[80vh] px-[20vw] items-center justify-center flex flex-col'>
      <div className='flex flex-row justify-center space-x-10 py-4 mt-8'>
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
          <h2 className={`text-3xl font-extrabold ` + bitter.className}> Let's work together.</h2>
          <p className='text-justify'>
            With over 2 years of professional experience as a front-end developer, I leverage creativity and technical expertise to deliver
            sleek interfaces that drive results.
            <br></br>
            <br></br>
            Looking for: Projects that combine innovation and problem-solving, allowing me to collaborate
            with passionate teams and build impactful experiences.
            <br></br>
            <br></br>
            Ready to discuss your next project? Contact me today!</p>
            <h2 className={`text-2xl font-extrabold ` + bitter.className}> My Techstacks</h2>
        </div>
      </div>
    </div>
  )
}

export default About