import React from 'react'
import ThemeChanger from '../theme-changer'
import Image from 'next/image'
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '/#about', current: true },
  { name: 'Experiences', href: '/#experience', current: false },
  { name: 'Projects', href: '/project', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function Navbar() {
  return (
    <div className="navbar lg:w-7/12 md:w-full sticky top-8 glass z-50 rounded-full border shadow-lg ">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href='/'>
          <Image
            alt=''
            src={"/logo.png"}
            width={60} height={0}
            quality={100}
            className=''
          />
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
          <li className='font-bold'><a href="./cv.pdf">Download CV</a></li>
        </ul>
        <ul className="menu menu-horizontal px-1 hidden md:flex">
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
          <li className='font-bold'><a href="./cv.pdf">Download CV</a></li>
          {/* <li><ThemeChanger/></li> */}
        </ul>

      </div>
    </div>
  )
}

export default Navbar