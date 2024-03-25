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
    <div className="w-full border shadow-lg ">
      <footer className="footer items-center p-4 text-stone-500 px-[20vw]">
        <aside className="items-center grid-flow-col space-x-3">
          <Image
            alt=''
            src={"/logo.svg"}
            width={60} height={0}
            quality={100}
            className='saturate-0 contrast-0'
          />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href='https://github.com/naufalfathur'>
            <Image src="/github-icon.svg" height={30} width={30} alt={'github'} className='saturate-0 brightness-200'/>
          </a>
          <a href='https://www.linkedin.com/in/naufalfathur/'>
            <Image src="/linkedin-icon.svg" height={30} width={30} alt={'github'} className='saturate-0 brightness-200'/>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer