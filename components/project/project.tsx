'use client'
import { TProject } from '@/types'
import React, { useEffect, useState } from 'react'
import { Bitter } from "next/font/google";
import { techstackList } from '@/public/data/techstacks';
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';
import { MoveRight, Sparkle, Sparkles } from 'lucide-react';
import Form from '../ui/form';
import parse from 'html-react-parser';
import FadeUpMotion from '../ui/fade-up-motion';
import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';
import { ArrowCircle } from '@/public/svgs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MediaAssetsSection from './mediaAssetsSection';
import { motion } from 'framer-motion';

interface ProjectProps {
  slug: string
}

function Project({ slug }: ProjectProps) {
  const [projectData, setProjectData] = useState<TProject>()
  const [themeColor, setThemeColor] = useState<string>()

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then((data: TProject[]) => {
        const project = data.filter(project => project.slug == slug)[0];
        setProjectData(project);
        setThemeColor(project.themeColor)
        console.log('server: contentful res', project);
      })
      .catch(err => console.error('Error fetching from API:', err));
  }, []);

  return (
    <LiquidGlassProvider>
      <FadeUpMotion>
        <div className='w-full max-w-6xl mx-auto space-y-4 py-10'>
          <div className='flex flex-col justify-center items-center space-y-2 font-light'>


            <Image
              src={projectData?.thumbnail?.fields.file.url ? ('https:/' + projectData.thumbnail.fields.file.url) : '/logo.svg'}
              alt={projectData?.name ?? 'Project thumbnail'}
              width={450}
              height={0}
              quality={90}
            />
            <div className='title-section flex-col w-full text-center'>
              <h1 className='text-3xl font-bold mt-4'>{projectData?.name}</h1>
              <p className='text-sm mt-1'>{projectData?.descTitle}</p>
              <div className="divider"></div>
            </div>

            <div className='short-desc-section flex w-full space-x-10'>

              <div className='roles flex-col text-left space-y-2 w-1/4'>
                <h1 className='text-xl font-bold mt-4'>My Role</h1>
                <div className="flex-col space-y-2">
                  {projectData?.role?.map((role, i) => (
                    <div key={i} className='relative card !shadow-xl flex-row py-2 space-x-2 w-full px-5 popup-fade'>
                      <LiquidGlassFilters />
                      <Sparkles className='!text-[#1B232E]/60 w-4' />
                      <p className='text-xs !text-[#1B232E]/60 font-bold mt-1'>{role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='short-desc flex-col text-left space-y-4 w-3/4'>
                <h1 className='text-xl font-bold'>Tech Stacks</h1>
                <div className="">
                  <div className='items-center flex space-x-4 mb-2'>
                    {projectData?.technologies?.map((tech, i) => (
                      <div className="carousel-item flex-col text-center space-y-2" key={i}>
                        <Image
                          alt=''
                          src={techstackList.find(item => item.name === tech)?.icon || '/default-icon.svg'}
                          width={80} height={0}
                          quality={100}
                          className='w-10 h-10 saturate-0 icon'
                        />
                        <p className='text-xs font-bold text-black/50'>{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-bg flex-col w-full space-y-2">
                  <h1 className='text-xl font-bold'>Project Background</h1>
                  <p className='text-sm/6 text-justify text-gray-600 whitespace-pre-line'>{projectData?.background}</p>
                </div>

                <div className="flex w-full space-x-4">
                  <div className="bg-[#1F2937] rounded-xl text-white py-2 px-8 shadow-xl w-fit popup-fade cursor-pointer">
                    <div className="flex space-x-2 items-center">
                      <span className="text-xs font-bold">Read Details</span>
                      <ArrowCircle className='rotate-90' width={30} height={30} circFill='#B2B2B232' />
                    </div>
                  </div>
                  {projectData?.url && projectData.url.length > 0 && (
                    <div className="rounded-xl text-[#1F2937] py-2 px-8 shadow-xl w-fit popup-fade cursor-pointer">
                      <div className="flex space-x-2 items-center">
                        <span className="text-xs font-bold">Visit website</span>
                        <ArrowCircle className='-rotate-45' width={30} height={30} circFill='#B2B2B232' />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="divider !mt-4"></div>

            <div className='mediaAssets w-full h-[550px] p-4'>
              <div className="flex w-full h-full space-x-4">

                <div className="mainSection w-1/4 h-full rounded-3xl overflow-clip" style={{
                  backgroundColor: themeColor
                    ? `#${themeColor}`
                    : '#ccc', // fallback color
                }}>
                  <motion.div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    transition={{
                      duration: 0.8,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.8 },
                    }}
                    style={{ transformOrigin: "center center", willChange: "transform" }}
                  >
                    <Image
                      alt=""
                      src={projectData ? `https:${projectData.mainSectionImg.fields.file.url}` : "/logo.png"}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={100}
                      priority={false}
                    />
                  </motion.div>
                </div>
                <div className='otherSection w-3/4 h-full'>
                  <MediaAssetsSection
                    themeColor={themeColor ?? "#ccc"}
                    assetQty={projectData?.otherSectionImg?.length ?? 1}
                    otherSectionImg={projectData?.otherSectionImg ?? []}
                  />
                </div>
              </div>
            </div>

            <div className="project-description flex-col w-4/5 space-y-2 !mt-4">
              <div className='text-md leading-7 whitespace-pre-line text-justify text-gray-600'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside !whitespace-normal" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside !whitespace-normal" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold text-lg" {...props} />,
                    em: ({ node, ...props }) => <em className="italic" {...props} />
                  }}
                >
                  {projectData?.desc ?? ''}
                </ReactMarkdown>
              </div>
            </div>



          </div>
        </div>
      </FadeUpMotion>

    </LiquidGlassProvider >
  )
}

export default Project