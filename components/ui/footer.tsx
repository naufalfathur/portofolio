import React from 'react'
import ThemeChanger from '../theme-changer'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Experiences', href: '#experience', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function Footer() {
  return (
    <div className="w-full border shadow-lg md:static sticky bottom-0 md:bg-transparent bg-white/70">
      <footer className="footer items-center p-4 text-stone-500 md:px-[20vw] md:inline-grid flex">
        <aside className="items-center grid-flow-col space-x-3 md:w-fit w-1/2">
          <Image
            alt=''
            src={"/logo.svg"}
            width={60} height={0}
            quality={100}
            className='saturate-0 contrast-0'
          />
          <p className='md:text-base text-xs'>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 justify-self-end md:w-fit w-1/2 justify-end">
          <a href='https://github.com/naufalfathur'>
            <Image src="/github-icon.svg" height={30} width={30} alt={'github'} quality={80} className='saturate-0 brightness-200' />
          </a>
          <a href='https://www.linkedin.com/in/naufalfathur/'>
            <Image src="/linkedin-icon.svg" height={30} width={30} alt={'github'} quality={80} className='saturate-0 brightness-200' />
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer