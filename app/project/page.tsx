import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import ProjectGrid from '@/components/app/projectGrid';
import { LazyMotion, domAnimation } from "motion/react"

function ProjectsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative ">
            <div className="absolute inset dot z-0 pointer-events-none"></div>
            <Navbar />
            <LazyMotion features={domAnimation}>
                <div className='md:px-[15vw] px-4 space-y-4 py-24 z-10 fade-in'>
                    <h2 className={`text-3xl font-extrabold text-center w-full`}> All Project</h2>
                    <p className='text-sm font-light text-center'>Showcase of my projects for clients and self development to create user-friendly and visually digital solutions.</p>
                    <div className='projects-grid relative'>
                        <ProjectGrid isFeatured={false} withTitle={false} />
                    </div>
                </div>
            </LazyMotion>
            <Contact />
            <Footer />
        </main>
    )
}

export default ProjectsPage