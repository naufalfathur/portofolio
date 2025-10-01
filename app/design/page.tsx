import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import DocFile from '@/components/docfile/docfile';


function DesignPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between  ">
            <div className="absolute inset dot z-0 pointer-events-none"></div>
            <Navbar />
            <div className=' max-w-6xl w-full px-4 space-y-4 py-24 fade-in z-50'>
                <h2 className={`text-3xl font-extrabold text-center w-full`}>Designs</h2>
                <p className='text-sm font-light text-center'>
                    A multidisciplinary showcase of branding, visual design, UI/UX, and web projects. Each piece combines creativity and technology to deliver thoughtful, user-centered solutions.
                </p>
                <div className='grid gap-4 md:grid-cols-3 grid-cols-2 pt-10'>
                    <div className="w-full col-span-full">
                        <DocFile category={'Portfolio'} />
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