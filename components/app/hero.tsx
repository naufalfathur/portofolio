'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { techstackList } from '@/public/data/techstacks';

const heroContent = {
  badgeGreetingLine1: 'Hi, Im <strong>Naufal Fathur</strong>',
  badgeGreetingLine2: 'Welcome to my Portfolio !',
  title: 'Creative Technologist for <br/> <br/> <br/> the next big ideas',
  subtitle: `I design and develop digital experiences that blend creativity with technology.
With a background in digitalisation and strategy, I don’t just build things, I help businesses shape where they’re going.
As the Technical Co-Founder of <span className="tooltip font-bold" data-tip="Visit the page"><Link href="https://generatif.co/" target="_blank" rel="noopener noreferrer">Generatif</Link></span>, I’ve worked at the intersection of creativity, technology, and business transformation.`,
  widget1Title: 'My Photograph',
  widget1Subtitle: '📍 Taken on Leeds, UK',
  widget2Title: 'This is Me!',
  widget3Title: 'Highlighted Project',
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
    <div className='hero welcome flex flex-col space-y-8 h-[95vh] md:min-h-[85vh] justify-center'>

      <div className="h-3/5 flex w-7/12 space-x-20">
        <div className="hero-texts w-1/2 h-full flex flex-col space-y-8 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <div className="badge badge-outline h-fit py-2 px-4 flex flex-row space-x-2 shadow-lg">
              <div className="avatar">
                <div className="md:w-10 md:h-10 w-8 h-8 rounded-full">
                  <Image
                    src={'/profile.jpeg'}
                    alt={'naufal fathur'}
                    width={42}
                    height={0}
                    quality={90}
                  />
                </div>
              </div>

              <div className='flex flex-col space-y-0 text-start items-start text-base text-[#5B5B5B]'>
                <p className='text-xs' dangerouslySetInnerHTML={{ __html: heroContent.badgeGreetingLine1 }} />
                <p className='text-xs' dangerouslySetInnerHTML={{ __html: heroContent.badgeGreetingLine2 }} />
              </div>

            </div>
          </motion.div>


          <div className='main-hero-title w-full'>
            <h1>
              {contentTitleWords.map((contentTitleWords, index) => (
                <motion.p
                  initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
                  animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  key={index}
                  className="md:text-5xl text-3xl font-extrabold text-[#1F2937] inline-block mr-1.5"
                  dangerouslySetInnerHTML={{ __html: contentTitleWords }}
                />
              ))}
            </h1>
          </div>

          <div className='main-hero-subtitle'>
            <motion.p
              initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:text-base text-base font-thin text-justify"
              dangerouslySetInnerHTML={{
                __html: heroContent.subtitle.replace(
                  /<span className="tooltip font-bold" data-tip="Visit the page"><Link href="https:\/\/generatif\.co\/" target="_blank" rel="noopener noreferrer">Generatif<\/Link><\/span>/g,
                  `<span class="tooltip font-bold" data-tip="Visit the page"><a href="https://generatif.co/" target="_blank" rel="noopener noreferrer">Generatif</a></span>`
                ),
              }}
            />
          </div>
        </div>


        <div className="hero-widgets w-1/2 h-full flex flex-col space-y-8 justify-center items-center py-8 md:mt-0 -mt-10">
          {/* Widgets container */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full h-full flex flex-col gap-6">
              {/* Row 1: two widgets, left 2/3, right 1/3 */}
              <div className="grid grid-cols-3 gap-3">
                {/* Widget 1 (2/3 width) */}
                <motion.div
                  className="relative col-span-2 h-56 overflow-visible rounded-2xl"
                  animate={{ x: w1Offset.x * 0.6, y: w1Offset.y * 0.6 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <motion.div
                    className="absolute -top-4 right-4"
                    animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  >
                    <div className="glass-new text-xs">
                      {heroContent.widget1Title}
                    </div>
                  </motion.div>
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/1tjUn2AJ0H7pp2FwqXvwc9/4d55f87b823680dd2c30eb07f29c8c0e/842FA9DF-D81F-4AF4-B06B-026B09018ABA.JPG')" }}
                  ></div>
                  <div className="absolute bottom-4 right-4 text-white/90 text-xs font-semibold drop-shadow">
                    {heroContent.widget1Subtitle}
                  </div>
                </motion.div>

                {/* Widget 2 (1/3 width) */}
                <motion.div
                  className="relative col-span-1 h-56 overflow-visible rounded-2xl"
                  animate={{ x: w1Offset.x * 0.6, y: w1Offset.y * 0.6 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <motion.div
                    className="absolute -top-4 right-0"
                    animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}>
                    <div className="glass-new text-xs">
                      {heroContent.widget2Title}
                    </div>
                  </motion.div>
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/4iZFQbd2MFBMuFqHFGsBXq/a9f2702271050ae320a73f79fb939e85/Gemini_Generated_Image_fjufh2fjufh2fjuf.jpg')" }}
                  ></div>
                </motion.div>
              </div>

              {/* Row 2: single full-width widget with overlay on the right, overlapping Row 1 */}
              <div className="relative">
                <motion.div
                  className="relative h-32 w-full overflow-visible rounded-2xl"
                  animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                >
                  <motion.div
                    animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="absolute -top-4 right-4 z-10">
                    <div className="glass-new text-xs">
                      {heroContent.widget3Title}
                    </div>
                  </motion.div>
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/6X40wHgGsOR1qYwJgZXJXi/f61378ef99f52839880d390d29cd04f9/swhig.png')" }}
                  ></div>
                </motion.div>

                {/* Overlay widget (red), taller and overlapping row 1 slightly */}
                <motion.div
                  className="absolute -top-16 left-0 h-48 w-52 z-20 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/4v5ihXSzWrKjr8GTnaY7tL/1112aadb40c4b380b74264aecd88532b/swhigphone.png')" }}
                  animate={{ x: w1Offset.x * 0.4, y: w1Offset.y * 0.4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                />
              </div>

              {/* Row 3: horizontally scrollable widget strip */}
              <div className="carousel h-full w-full">
                <div className='items-center flex space-x-4'>
                  {techstackList.map((tech, i) => (
                    <div className="carousel-item" key={i}>
                      <Image
                        alt=''
                        src={tech.icon}
                        width={80} height={0}
                        quality={100}
                        className='w-10 h-10 saturate-0 icon'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>


    </div>
  )
}

export default Hero