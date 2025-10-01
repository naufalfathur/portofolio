'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import * as m from "motion/react-m"
import { techstackList } from '@/public/data/techstacks';
import { WidgetCard } from '../ui/widget';
import parse from 'html-react-parser';

const heroContent = {
  badgeGreetingLine: 'Hi, Im <strong>Naufal Fathur</strong><br/>Welcome to my Portfolio !',
  title: 'Creative Technologist for the next big ideas',
  subtitle:
    `Im <span classname="font-bold">Naufal</span> and Im the <span classname="font-bold">Co-Founder</span> of
  <span className="cursor-pointer tooltip icon text-[#2FA8FF] font-bold inline-flex items-start gap-1 align-bottom" data-tip="Visit the page">
        <Image src="/generatif-ico.svg" height={20} width={20} alt={'generatif'} className='w-5 h-5 inline-block' />
        <Link href="https://generatif.co/" target="_blank" rel="noopener noreferrer">Generatif</Link>
    </span>, 
  I design and develop digital experiences that blend creativity with technology.
  With a background in digitalisation and strategy, I don’t just build things, I help businesses shape where they’re going.
  I’ve worked at the intersection of creativity, technology, and business transformation.`,
  widget1Title: 'My Photograph',
  widget1Subtitle: '📍 Taken on Leeds, UK',
  widget2Title: 'Latest Project',
  widget3Title: 'Coming Soon',
};

const contentTitleWords = heroContent.title.split(' ');

function Hero() {
  const [w1Offset, setW1Offset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setW1Offset({ x, y });
    };
    const handleMouseLeave = () => setW1Offset({ x: 0, y: 0 });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='hero flex flex-col space-y-8 h-[95vh] md:min-h-[85vh] justify-center'>

      <div className="h-3/5 flex w-full max-w-6xl mx-auto px-6 space-x-20">
        <div className="hero-texts w-1/2 h-full flex flex-col space-y-8 justify-center">

          <div className="chat chat-start -mb-4">
            <div className="chat-image avatar">
              <div className="md:w-12 md:h-12 w-8 h-8 rounded-full">
                <Image
                  src={'/profile.jpeg'}
                  alt={'naufal fathur'}
                  width={52}
                  height={0}
                  quality={90}
                />
              </div>
            </div>
            <div className="chat-header flex space-x-2 items-center text-xs mb-1">
              <p className='!text-orange-500'>⏺</p>
              <p className='font-semibold'> Available for work</p>
            </div>
            <m.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="chat-bubble text-sm">
              <p>{parse(heroContent.badgeGreetingLine)}</p>
            </m.div>
          </div>


          <div className='main-hero-title w-full'>
            <h1>
              {contentTitleWords.map((contentTitleWords, index) => (
                <m.p
                  initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
                  animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  key={index}
                  className="md:text-6xl text-3xl font-extrabold text-[#1F2937] inline-block mr-1.5"
                >
                  {parse(contentTitleWords)}
                </m.p>
              ))}
            </h1>
          </div>

          <div className='main-hero-subtitle'>
            <m.p
              initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:text-base text-base font-thin text-justify"
            >{parse(heroContent.subtitle)}</m.p>
          </div>
        </div>


        <div className="hero-widgets w-1/2 h-full flex flex-col space-y-8 justify-center items-center py-8 md:mt-0 -mt-10">
          {/* Widgets container */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full h-full flex flex-col gap-6">
              {/* New 2-column layout */}
              <div className="flex gap-3">
                {/* Left column: Widget 1 (top) + Widget 3 (bottom) */}
                <div className="relative flex flex-col gap-5 flex-[1.3]">
                  <WidgetCard
                    title={heroContent.widget1Title}
                    subtitle={heroContent.widget1Subtitle}
                    bgImage="https://images.ctfassets.net/wtyk6zs1a32v/1tjUn2AJ0H7pp2FwqXvwc9/4d55f87b823680dd2c30eb07f29c8c0e/842FA9DF-D81F-4AF4-B06B-026B09018ABA.JPG?fm=webp&w=600"
                    offset={w1Offset}
                    strength={0.4}
                    heightClass="flex-[2]" link={''} />
                  <WidgetCard
                    title={heroContent.widget3Title}
                    bgImage="https://images.ctfassets.net/wtyk6zs1a32v/6X40wHgGsOR1qYwJgZXJXi/c131003d1ae68e6103b6da376fd4242c/swifthumbnail.png?fm=webp&w=500"
                    offset={w1Offset}
                    strength={0.4}
                    heightClass="flex-[1]" link={'/project'} />
                  {/* Overlay element crossing between Widget 1 & 3 */}
                  <m.div
                    className="pointer-events-none absolute bottom-0 -left-10 h-48 w-52 z-20 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/4v5ihXSzWrKjr8GTnaY7tL/1112aadb40c4b380b74264aecd88532b/swhigphone.png?fm=webp')" }}
                    animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                  />
                </div>

                {/* Right column: Widget 2 full height */}
                <WidgetCard
                  title={heroContent.widget2Title}
                  //bgImage="https://images.ctfassets.net/wtyk6zs1a32v/4iZFQbd2MFBMuFqHFGsBXq/a9f2702271050ae320a73f79fb939e85/Gemini_Generated_Image_fjufh2fjufh2fjuf.jpg"
                  offset={w1Offset}
                  strength={0.4}
                  heightClass="h-[25rem]"
                  className="flex-[1]" link={'/project'}
                >
                  <div className="absolute bottom-4 left-4 flex-col text-black space-y-1 text-xs font-semibold">
                    <Image src="/laurel-wreath.svg" height={30} width={30} alt={'award'} className='' />
                    <p>Best Pitch <br />Award</p>
                  </div>

                  <m.div
                    className="w-full h-full flex justify-center items-center p-4"
                    style={{ perspective: 1000 }}
                    initial={{ rotateZ: -20, rotateX: 0, y: 0, x: 40 }}
                    whileHover={{ rotateZ: 0, rotateX: 0, y: 0, x: 0 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                  >
                    {/* Gradient overlay (visible by default, hides on hover) */}
                    <Image
                      src="https://images.ctfassets.net/wtyk6zs1a32v/Kx0faiSYFGUxhDpOGGdAo/da73e0d5365ac2e987e59e0ad0a29a65/tnmockup.png?fm=webp"
                      alt="TaskNinja Mockup"
                      width={400}
                      height={0}
                      quality={60}
                      className="object-contain w-full h-full will-change-transformright"
                    />

                  </m.div>
                </WidgetCard>
              </div>

              {/* Row 3: horizontally scrollable widget strip */}
              <div className="carousel h-full w-full py-2 ">
                <div className='items-center flex space-x-4'>
                  {techstackList.map((tech, i) => (
                    <div className="carousel-item" key={i}>
                      <Image
                        alt=''
                        src={tech.icon}
                        width={80} height={0}
                        quality={60}
                        className='w-10 h-10 saturate-0 icon'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        </div >

      </div >


    </div >
  )
}

export default Hero