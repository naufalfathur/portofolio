import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { projectList } from '@/public/data/projects';
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';

function CVpage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <Navbar />
            <div className='md:px-[15vw] px-4 space-y-4 py-24'>
                <h2 className={`text-3xl font-extrabold text-center w-full` + bitter.className}>Curriculum Vitae</h2>
                <p className='text-sm font-light text-center'>
                    A concise overview of my professional background, skills, and experiences, showcasing my journey across tech, design, and business. Downloadable CV available.
                </p>
                <div className='grid gap-4 md:grid-cols-3 grid-cols-2 pt-10'>
                    <div className="w-full col-span-full">
                        <iframe
                            src="/Naufal_Wahid_CV.pdf"
                            className="w-full h-[80vh] border"
                            title="Design Portfolio PDF"
                        />
                        <div className="text-center mt-4">
                            <a
                                href="/Naufal_Wahid_CV.pdf"
                                download
                                className={`text-2xl font-extrabold text-center w-full` + bitter.className}
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default CVpage