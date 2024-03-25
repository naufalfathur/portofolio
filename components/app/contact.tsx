import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Link from 'next/link';

function Contact() {
  return (
    <div className='md:w-full w-[100vw] py-20 md:px-[15vw] px-4 text-center space-y-3'>

      <div className="mockup-browser border border-base-300 glass shadow-lg md:floating">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">Chat with naufalfathur</div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 py-16 border-t border-base-300 space-y-4">
          <h2 className={`text-3xl font-extrabold ` + bitter.className}>Would you like to work with me?</h2>
          <p className=' font-light'>I&apos;m always eager to take on new challenges and help businesses thrive online. Get in touch today to discuss your project!</p>
          <Link href="/contact">
            <button className="btn btn-outline w-fit">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact