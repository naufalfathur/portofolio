import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'

import { experiencesList } from '../../public/data/experiences'
import { educationList } from '../../public/data/education'

function Experiences() {
  return (
    <div id={'experience'} className='w-full relative'>

      <div className="w-fit absolute right-80 -top-52 hidden md:flex">
        <div className="h-60 "></div>
        <div className="divider divider-horizontal divider-start font-light text-neutral-500 animate-pulse">My Education & Experiences</div>
        <div className="h-60"></div>
      </div>

      <div className='bg-[#1b232a] py-20 md:px-[15vw] w-full flex flex-col text-neutral-content text-center space-y-10'>
        <div>
          <h2 className={`text-3xl font-extrabold ` + bitter.className}>My Education & Experiences</h2>
          <p className='text-sm font-light'>A Passionate developer and designer with a knack for crafting exceptional digital experiences</p>
        </div>

        <div className='education-section w-full flex justify-center items-center'>
          <ul className="timeline timeline-vertical lg:timeline-horizontal">

            {educationList.map(({ uni, active, course, time, logo, descriptions }, i) => (
              <li key={course}>
                <hr />
                <div className="timeline-start">{time}</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={`timeline-end timeline-box text-sm text-black ${active && 'tooltip tooltip-open tooltip-bottom tooltip-info'}`} data-tip="Present">{uni} - {course}</div>
                <hr />
              </li>
            ))}

          </ul>
        </div>



        <div className='flex md:flex-row-reverse flex-col space-y-3 md:space-y-0'>
          {experiencesList.map(({ employer, active, time, position, logo }, i) => (
            <div className="mockup-code bg-[#28333c] md:w-full mx-4" key={i}>
              <div className='container flex flex-col text-start' >

                <div className=' flex flex-col space-y-1'>
                  <h2 className='text-xl bg-warning text-warning-content font-extrabold px-4 '>{position} {active && <div className="badge badge-error">Currently</div>}</h2>
                  <h2 className='text-xl font-light px-4'>@{employer}</h2>
                  <p className='font-regular text-sm text-slate-500 px-4'>{time}</p>
                  {/* <ul className='list-disc container space-y-2 text-xs text-muted-foreground px-8 px-4'>
                  {descriptions.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul> */}
                  <div className="w-24 p-4">
                    <Image
                      src={logo}
                      alt={'logo'}
                      width={96}
                      height={0}
                      quality={90}
                    />
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