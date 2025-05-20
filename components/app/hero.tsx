import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
function Hero() {
  return (
    <div className='hero welcome flex flex-col space-y-8 h-[95vh] md:min-h-[85vh] justify-center '>

      <div className="h-3/5 flex flex-col space-y-8 justify-center items-center py-8 md:px-[15vw] md:mt-0 -mt-10">
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

        <div className='main-hero-title'>
          <h1 className="md:text-7xl text-3xl font-extrabold text-center animate-pulse text-[#1F2937]">
            Unlock Digital Growth</h1>
          <h1 className="md:text-7xl text-3xl font-extrabold text-center animate-pulse text-[#B3B6BA]">
            Digitalize Your Workflow</h1>
        </div>

        <div className='main-hero-subtitle text-center w-9/12'>
          <p className='md:text-base text-xs font-bold'>
            Experienced software developer (3+ years) specializing in creating engaging, responsive UIs for web, mobile, and multi-platform applications.
            I bridge design and functionality to deliver beautiful, high-performance digital solutions.
          </p>
        </div>
      </div>

      <div className="project-highlight h-2/5 w-full bg-[url('/img/projects/swifbanner.png')] bg-cover 
      bg-center bg-no-repeat shadow-[inset_0_20px_60px_rgba(0,0,0,0.2)] cursor-pointer">
        {/* <div className="w-full h-full flex justify-center items-center">
        </div> */}
      </div>



      <div className='logo-floating absolute md:right-40 bottom-20 floating  tooltip tooltip-open tooltip-top tooltip-warning floating cursor-pointer' data-tip="Click to work with me!">
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

      <div className="phone-floating absolute md:left-20 -bottom-5 hidden md:block">
        <Link href={'/'}>
          <Image
            alt='logo'
            src={"/img/phonehand.png"}
            width={0}
            height={0}
            sizes='40vw'
            quality={100}
            style={{ width: 'auto', height: 'auto' }}
            className=''
          />
        </Link>
      </div>

      <div className="scroll-text md:flex absolute bottom-80 left-1/3 hidden ">
        <div className="h-20 "></div>
        <div className="divider divider-horizontal divider-start font-light text-neutral-500 animate-pulse">Project Highlight</div>
        <div className="h-20"></div>
      </div>
    </div>
  )
}

export default Hero