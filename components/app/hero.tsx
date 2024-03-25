import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='hero welcome flex flex-col py-8 px-[15vw] space-y-8 min-h-[85vh] justify-center'>

      <div className="badge badge-outline h-fit py-2 px-4 flex flex-row space-x-4 shadow-lg">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image
              src={'/profile.jpeg'}
              alt={'naufal fathur'}
              width={48}
              height={0}
              quality={90}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-0 text-start items-start text-base text-[#5B5B5B]'>
          <p>Hi, Im Naufal Fathur !</p>
          <p className='font-bold'>Im a <strong>Software Developer</strong></p>
        </div>
      </div>

      <div>
        <h1 className="text-8xl font-extrabold text-center animate-pulse text-[#1F2937]">
          Unlock Digital Growth</h1>
        <h1 className="text-8xl font-extrabold text-center animate-pulse text-[#B3B6BA]">
          Digitalize Your Workflow</h1>
      </div>

      <div className='text-center'>
        <p className='font-bold'>
          I'm a software developer with over 2 years of experience building engaging and responsive UIs for web, mobile,<br></br>
          and multi-platform applications. My background in development allows me to bridge the gap between design and functionality,
          <br></br> ensuring the digital solutions I create are both beautiful and performant.
        </p>
      </div>
      <div className='absolute right-40 bottom-20 floating  tooltip tooltip-open tooltip-top tooltip-warning floating' data-tip="Click to work with me!">
        <Image
          alt='logo'
          src={"/logo.png"}
          width={250} height={0}
          quality={100}
          className='rotate-6 my-2'
        />
      </div>

      <div className="flex absolute -bottom-48 left-1/3">
        <div className="h-80 "></div>
        <div className="divider divider-horizontal divider-start font-light text-neutral-500 animate-pulse">SCROLL</div>
        <div className="h-80"></div>
      </div>
    </div>
  )
}

export default Hero