import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Experiences', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function Navbar() {
    return (
        <div className='absolute'>
            <div className='mx-auto px-2 sm:px-6 lg:px-8 w-screen '>
                <div className="flex flex-row justify-between  h-16 items-center">
                    <div ><svg className="animate-pulse text-white hover:text-[#4485FD] hover:cursor-pointer fill-current" width="25" height="25" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.191812 51.2074H18.1438L20.4379 31.4311C20.8717 27.6911 16.681 25.1959 13.5997 27.3596L0.191779 36.7752L0.191812 51.2074Z" />
                        <path d="M17.2332 1.25412H0.191812V4.72673C0.191812 8.24432 4.14226 10.3145 7.03466 8.31264L17.2332 1.25412Z" />
                        <path d="M33.1037 0.603691C29.4396 0.603691 26.166 1.25412 21.8048 4.3268L0 26.1318L21.5585 16.149C22.6643 15.4986 23.9543 15.1734 25.4286 15.1734C27.6834 15.1734 29.4396 15.878 30.6971 17.2873C31.9763 18.6966 32.6051 20.637 32.5834 23.1087V51.2074C42.498 51.2074 50.5353 43.17 50.5353 33.2554V19.3362C50.557 15.7154 49.8415 12.4958 48.3889 9.67723C46.9579 6.85869 44.9308 4.64721 42.3073 3.04281C39.7056 1.41673 36.6377 0.603691 33.1037 0.603691Z" />
                        <path d="M0.191812 51.2074H18.1438L20.4379 31.4311C20.8717 27.6911 16.681 25.1959 13.5997 27.3596L0.191779 36.7752L0.191812 51.2074Z" />
                        <path d="M17.2332 1.25412H0.191812V4.72673C0.191812 8.24432 4.14226 10.3145 7.03466 8.31264L17.2332 1.25412Z" />
                        <path d="M33.1037 0.603691C29.4396 0.603691 26.166 1.25412 21.8048 4.3268L0 26.1318L21.5585 16.149C22.6643 15.4986 23.9543 15.1734 25.4286 15.1734C27.6834 15.1734 29.4396 15.878 30.6971 17.2873C31.9763 18.6966 32.6051 20.637 32.5834 23.1087V51.2074C42.498 51.2074 50.5353 43.17 50.5353 33.2554V19.3362C50.557 15.7154 49.8415 12.4958 48.3889 9.67723C46.9579 6.85869 44.9308 4.64721 42.3073 3.04281C39.7056 1.41673 36.6377 0.603691 33.1037 0.603691Z" />
                    </svg>
                    </div>
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'text-gray-300 hover:text-[#4485FD] px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar