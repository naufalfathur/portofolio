import React from 'react'
import ThemeChanger from '../theme-changer'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Experiences', href: '#experience', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function Navbar() {
  return (
    <div className="navbar w-7/12 sticky top-8 glass z-50 rounded-full border  shadow-lg ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
        <Image
                        alt=''
                        src={"/logo.png"}
                        width={60} height={0}
                        quality={100}
                        className=''
                    />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item, key) => (
            <li key={key}>
              <a
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* <li><ThemeChanger/></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar