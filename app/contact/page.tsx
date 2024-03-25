import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Bitter } from "next/font/google";
import Form from '@/components/ui/form';
const bitter = Bitter({ subsets: ["latin"] });

function ProjectsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <Navbar />
            <div className='px-[20vw] space-x-4 py-10 text-center w-full flex'>
                <div className='space-y-4'>
                    <h1 className="text-7xl font-extrabold text-left text-[#1F2937]">
                        Hi 👋, Interested to colaborate ?</h1>
                    <h1 className="text-4xl font-extrabold text-left text-[#B3B6BA]">
                        Fill out your details and I&apos;ll be in touch.</h1>
                </div>
                <Form title='Contact Form' />
            </div>
            <Footer />
        </main>
    )
}

export default ProjectsPage