import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
function Hero() {
  return (
    <div className='hero welcome flex flex-col space-y-8 h-[95vh] md:min-h-[85vh] justify-center'>

      <div className="h-3/5 flex w-7/12 space-x-20">
        <div className="hero-texts w-full h-full flex flex-col space-y-8 justify-center py-8 md:mt-0 -mt-10">
          <div className="badge badge-outline h-fit py-2 px-4 flex flex-row space-x-4 shadow-lg">
            <div className="avatar">
              <div className="md:w-12 md:h-12 w-8 h-8 rounded-full">
                <Image
                  src={'/profile.jpeg'}
                  alt={'naufal fathur'}
                  width={48}
                  height={0}
                  quality={90}
                />
              </div>
            </div>

            <div className='flex flex-col space-y-0 text-start items-start text-base text-[#5B5B5B]'>
              <p className='md:text-base text-xs'>Hi, Im <strong>Naufal Fathur</strong></p>
              <p className='md:text-base text-xs'>Welcome to my Portfolio !</p>
            </div>

          </div>

          <div className='main-hero-title w-full'>
            <h1 className="md:text-5xl text-3xl font-extrabold text-[#1F2937]">
              Creative Technologist for <br />the next big ideas
            </h1>
          </div>

          <div className='main-hero-subtitle'>
            <p className='md:text-base text-base font-thin text-justify'>
              I design and develop digital experiences that blend creativity with technology.
              With a background in digitalisation and strategy, I don’t just build things, I help businesses shape where they’re going.
              As the Technical Co-Founder of <span className="tooltip font-bold" data-tip="Visit the page"><Link href="https://generatif.co/" target="_blank" rel="noopener noreferrer">Generatif</Link></span>, I’ve worked at the intersection of creativity, technology, and business transformation.
            </p>
          </div>
        </div>


        <div className="hero-widgets w-full h-full flex flex-col space-y-8 justify-center items-center py-8 md:mt-0 -mt-10">
          {/* Widgets container */}
          <div className="w-full h-full flex flex-col gap-6">
            {/* Row 1: two widgets, left 2/3, right 1/3 */}
            <div className="grid grid-cols-3 gap-3">
              {/* Widget 1 (2/3 width) */}
              <div className="relative col-span-2 h-56 overflow-visible rounded-2xl">
                <div className="absolute -top-4 right-4">
                  <div className="badge badge-neutral px-4 py-3 text-base-100 text-sm rounded-full shadow">
                    My Potograph
                  </div>
                </div>
                <div
                  className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/1tjUn2AJ0H7pp2FwqXvwc9/4d55f87b823680dd2c30eb07f29c8c0e/842FA9DF-D81F-4AF4-B06B-026B09018ABA.JPG')" }}
                ></div>
                <div className="absolute bottom-4 right-4 text-white/90 text-sm font-semibold drop-shadow">
                  Subtitle
                </div>
              </div>

              {/* Widget 2 (1/3 width) */}
              <div className="relative col-span-1 h-56 overflow-visible rounded-2xl">
                <div className="absolute -top-4 right-0">
                  <div className="badge glass px-4 py-3 text-base-100 text-md rounded-full shadow">
                    This is Me!
                  </div>
                </div>
                <div
                  className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/4iZFQbd2MFBMuFqHFGsBXq/a9f2702271050ae320a73f79fb939e85/Gemini_Generated_Image_fjufh2fjufh2fjuf.jpg')" }}
                ></div>
              </div>
            </div>

            {/* Row 2: single full-width widget with overlay on the right, overlapping Row 1 */}
            <div className="relative">
              <div className="relative h-32 w-full overflow-visible rounded-2xl">
                <div className="absolute -top-4 right-4 z-10">
                  <div className="badge badge-neutral px-4 py-3 text-base-100 text-sm rounded-full shadow">
                    Highlighted Project
                  </div>
                </div>
                <div
                  className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/6X40wHgGsOR1qYwJgZXJXi/f61378ef99f52839880d390d29cd04f9/swhig.png')" }}
                ></div>
              </div>

              {/* Overlay widget (red), taller and overlapping row 1 slightly */}
              <div
                className="absolute -top-16 left-0 h-48 w-52 z-20 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url('https://images.ctfassets.net/wtyk6zs1a32v/4v5ihXSzWrKjr8GTnaY7tL/1112aadb40c4b380b74264aecd88532b/swhigphone.png')" }}
              ></div>
            </div>

            {/* Row 3: horizontally scrollable widget strip */}
            <div className="bg-base-300 rounded-xl h-16 w-full overflow-x-auto">
              <div className="flex items-center gap-4 h-full px-4 min-w-max">
                {/* Example scroll items – replace with icons later */}
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
                <div className="w-10 h-10 rounded-lg bg-base-100 shadow" />
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero