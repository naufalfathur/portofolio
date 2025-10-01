import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Bitter } from "next/font/google";
import EmailForm from '@/components/contact/email-form';
const bitter = Bitter({ subsets: ["latin"] });

function ProjectsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <div className="absolute inset dot z-0 pointer-events-none"></div>
            <Navbar />
            <div className='md:px-[20vw] px-4 md:space-x-4 py-10 text-center w-full flex md:flex-row flex-col md:space-y-0 space-y-4 z-50'>
                <div className='space-y-4'>
                    <h1 className="md:text-7xl text-4xl font-extrabold text-left text-[#1F2937]">
                        Hi 👋, Interested to colaborate ?</h1>
                    <h1 className="md:text-4xl text-xl font-extrabold text-left text-[#B3B6BA]">
                        Fill out your details and I&apos;ll be in touch.</h1>
                </div>
                <EmailForm title='Contact Form' />
            </div>
            <Footer />
        </main>
    )
}

export default ProjectsPage