import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

function Contact() {
  return (
    <div className='w-full py-20 px-[15vw] text-center space-y-3'>

      <div className="mockup-browser border border-base-300 glass shadow-lg floating">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">Chat with naufalfathur</div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 py-16 border-t border-base-300 space-y-4">
          <h2 className={`text-3xl font-extrabold ` + bitter.className}>Would you like to work with me?</h2>
          <p className=' font-light'>I'd love to learn more. Hit the button below to get in touch!</p>
          <button className="btn btn-outline w-fit">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact