import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

function Extras() {
  return (
    <div className='py-20 px-[10vw] w-full flex flex-col items-center'>
  <h2 className={`text-3xl font-extrabold ` + bitter.className}> My Website Project</h2>
        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default Extras