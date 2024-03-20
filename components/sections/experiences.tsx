import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'

import { experiencesList } from '../../public/data/experiences'

function Experiences() {
  return (
    <div className='w-full relative'>

      <div className="flex w-fit absolute right-80 -top-52">
        <div className="h-60 "></div>
        <div className="divider divider-horizontal divider-start font-light text-neutral-500 animate-pulse">MY EXPERIENCES</div>
        <div className="h-60"></div>
      </div>

      <div className='bg-[#1b232a] py-20 px-[20vw] w-full flex flex-col text-neutral-content text-center space-y-8'>
        <div>
          <h2 className={`text-3xl font-extrabold ` + bitter.className}> My Experiences</h2>
          <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>


        <div className='flex flex-row'>
          {experiencesList.map(({ employer, descriptions, time, position, logo }, i) => (
            <div className="mockup-code bg-[#28333c] w-full mx-4 floating" key={i}>
              <div className='container flex flex-col text-start' >

                <div className=' flex flex-col space-y-1'>
                  <h2 className='text-xl bg-warning text-warning-content font-extrabold px-4 '>{position}</h2>
                  <h2 className='text-xl font-light px-4'>@{employer}</h2>
                  <p className='font-regular text-sm text-slate-500 px-4'>{time}</p>
                  {/* <ul className='list-disc container space-y-2 text-xs text-muted-foreground px-8 px-4'>
                  {descriptions.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul> */}
                  <div className="w-24 p-4">
                    <img src={logo} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  )
}

export default Experiences