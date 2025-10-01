import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import Image from 'next/image'
import Link from 'next/link';

function DesignPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <Navbar />
            <div className='md:px-[15vw] px-4 space-y-4 py-24'>
                <h2 className={`text-3xl font-extrabold text-center w-full` + bitter.className}> Design Portfolio</h2>
                <p className='text-sm font-light text-center'>
                    A multidisciplinary design portfolio showcasing work across branding, visual design, UI/UX, and web development.
                    With a strong foundation in both creativity and technology, each project is crafted to deliver purposeful, user-centered solutions, ranging
                    from digital products and brand identities to websites and visual assets.
                </p>
                <div className='grid gap-4 md:grid-cols-3 grid-cols-2 pt-10'>
                    <div className="w-full col-span-full">
                        <iframe
                            src="/design_portfolio.pdf"
                            className="w-full h-[80vh] border"
                            title="Design Portfolio PDF"
                        />
                        <div className="text-center mt-4">
                            <a
                                href="/design_portfolio.pdf"
                                download
                                className={`text-2xl font-extrabold text-center w-full` + bitter.className}
                            >
                                Download PDF
                            </a>
                        </div>
                        <div className='mt-4 gap-2 grid-cols-2'>
                            <p className="text-sm font-light text-center mb-4">
                                Below are a few interactive showcases of my design work on Figma.
                            </p>
                            <iframe className="w-full h-[80vh] border" src="https://embed.figma.com/design/4zdlhaKitIksRXo7Cb0GMf/Naufal-Projects?node-id=0-1&embed-host=share" title="Figma Showcase"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default DesignPage