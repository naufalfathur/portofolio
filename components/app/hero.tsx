import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
function Hero() {
  return (
    <div className='hero welcome flex flex-col py-8 md:px-[15vw] space-y-8 md:min-h-[85vh] h-[80vh] md:mt-0 -mt-10 justify-center'>

      <div className="badge badge-outline h-fit py-2 px-4 flex flex-row space-x-4 shadow-lg">

        <div className="avatar">
          <div className="md:w-12 md:h-12 w-8 h-8 rounded-full">
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
          <p className='md:text-base text-xs'>Hi, Im Naufal Fathur !</p>
          <p className='md:text-base text-xs font-bold'>Im a <strong>Software Developer</strong></p>
        </div>

      </div>

      <div>
        <h1 className="md:text-8xl text-3xl font-extrabold text-center animate-pulse text-[#1F2937]">
          Unlock Digital Growth</h1>
        <h1 className="md:text-8xl text-3xl font-extrabold text-center animate-pulse text-[#B3B6BA]">
          Digitalize Your Workflow</h1>
      </div>

      <div className='text-center w-8/12'>
        <p className='md:text-base text-xs font-bold'>
          I&apos;m a software developer with over 2 years of experience building engaging and responsive UIs for web, mobile,
          and multi-platform applications. My background in development allows me to bridge the gap between design and functionality, 
          ensuring the digital solutions I create are both beautiful and performant.
        </p>
      </div>
      <div className='absolute md:right-40 bottom-20 floating  tooltip tooltip-open tooltip-top tooltip-warning floating cursor-pointer' data-tip="Click to work with me!">
        <Link href={'/contact'}>
        <Image
          alt='logo'
          src={"/logo.png"}
          width={0}
          height={0}
          sizes='15vw'
          quality={100}
          style={{ width: 'auto', height: 'auto' }}
          className='rotate-6 my-2'
        />
        </Link>
      </div>

      <div className="md:flex absolute -bottom-48 left-1/3 hidden ">
        <div className="h-80 "></div>
        <div className="divider divider-horizontal divider-start font-light text-neutral-500 animate-pulse">SCROLL</div>
        <div className="h-80"></div>
      </div>
    </div>
  )
}

export default Hero