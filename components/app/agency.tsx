import { MoveRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Agency() {
    return (
        <div className='py-20 px-[15vw] w-full mb-10'>
            <div className="card lg:card-side h-full py-10 video-container">
                <video className="video rounded-2xl" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                    <source src="https://generatif.co/storage/2023/05/pexels-dan-cristian-paduret-4508069-1920x1080-50fps.mp4" type="video/mp4" />
                </video>
                <div className='overlay bg-[#181C1F]/80 rounded-2xl'></div>
                <div className="card-body w-full caption py-10 text-neutral-content">
                    <div className='w-[150px] py-4'>
                        <Image
                            src={'https://generatif.co/storage/2023/06/generatif-300x66.png'}
                            alt={'generatif'}
                            width={150}
                            height={0}
                            quality={90}
                        />
                    </div>
                    <h2 className="card-title text-4xl font-extrabold">I also run a small agency that help your business into digital</h2>
                    <p>Our service removes the hassle from building your online presence. We create blazing-fast, custom websites and app for small businesses at an affordable monthly rate.</p>
                   <a href={'https://generatif.co/'}>
                   <button className="btn  w-fit">
                        Visit Generatif
                        <MoveRight />
                    </button>
                   </a>
                </div>
                <figure className='w-full -mt-20 rotate-12'>
                    <Image
                        src={'/img/generatif.png'}
                        alt={'generatif'}
                        width={500}
                        height={0}
                        quality={90}
                    />
                </figure>

            </div>
        </div>
    )
}

export default Agency