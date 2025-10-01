import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';
import DocFile from '@/components/docfile/docfile';

function CVpage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <div className="absolute inset dot z-0 pointer-events-none"></div>
            <Navbar />
            <div className='md:px-[15vw] px-4 space-y-4 py-24 z-50'>
                <h2 className={`text-3xl font-extrabold text-center w-full` + bitter.className}>Curriculum Vitae</h2>
                <p className='text-sm font-light text-center'>
                    A concise overview of my professional background, skills, and experiences, showcasing my journey across tech, design, and business. Downloadable CV available.
                </p>
                <div className='grid gap-4 md:grid-cols-3 grid-cols-2 pt-10'>
                    <div className="w-full col-span-full">
                        <DocFile category={'CV'} />
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default CVpage