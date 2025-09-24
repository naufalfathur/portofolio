import React from 'react'
import ThemeChanger from '../theme-changer'
import Image from 'next/image'
import Link from 'next/link';
import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';
import { LogoSVG } from '../../public/logo';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Design Portfolio', href: '/design', current: false },
  { name: 'Projects', href: '/project', current: false },
  { name: 'CV', href: '/cv', current: false },
  { name: 'Contact', href: '/contact', current: false }
]

const config = {
  frostBlur: "10px",
  // ... other options
};


function Navbar() {
  return (
    <LiquidGlassProvider value={config} >
      <div className="navbar lg:w-7/12 md:w-full sticky top-8 z-50 rounded-full border shadow-lg ">
        <LiquidGlassFilters />
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href='/'>
            <LogoSVG />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 md:hidden">
            <li>
              <details>
                <summary>
                  Menu
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  {navigation.map((item, key) => (
                    <li key={key}>
                      <Link
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className='font-bold'>  <a href='https://github.com/naufalfathur' target="_blank" rel="noopener noreferrer">
              <Image src="/github-icon.svg" height={20} width={20} alt={'github'} className='saturate-0 brightness-200' />
            </a></li>
            <li className='font-bold'>   <a href='https://www.linkedin.com/in/naufalfathur/' target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.svg" height={20} width={20} alt={'github'} className='saturate-0 brightness-200' />
            </a></li>

            {/* <li className='font-bold'><a href="./cv.pdf">Download CV</a></li> */}
          </ul>
          <ul className="menu menu-horizontal px-1 hidden md:flex">

            <div className="flex w-full">
              {navigation.map((item, key) => (
                <li key={key} className=' mix-blend-difference text-white hover:font-bold'>
                  <Link
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className="divider divider-horizontal" />
              <li className='font-bold'>  <a href='https://github.com/naufalfathur' target="_blank" rel="noopener noreferrer">
                <Image src="/github-icon.svg" height={20} width={20} alt={'GitHub'} className='saturate-0 brightness-200' />
              </a></li>
              <li className='font-bold'>   <a href='https://www.linkedin.com/in/naufalfathur/' target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin-icon.svg" height={20} width={20} alt={'Linkedin'} className='saturate-0 brightness-200' />
              </a></li>
              <li className='font-bold'>   <a href='https://www.figma.com/design/4zdlhaKitIksRXo7Cb0GMf/Naufal-Projects?node-id=0-1&t=qb1D8LCMnAyGS85d-1' target="_blank" rel="noopener noreferrer">
                <Image src="/figma-icon.png" height={15} width={15} alt={'Figma'} className='' />
              </a></li>
            </div>

            {/* <li className='font-bold'><a href="./cv.pdf">Download CV</a></li> */}
            {/* <li><ThemeChanger/></li> */}
          </ul>

        </div>
      </div>
    </LiquidGlassProvider>
  )
}

export default Navbar