import Contact from '@/components/app/contact';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import DocFile from '@/components/docfile/docfile';
import Gallery from '@/components/photos/gallery';


function DesignPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="absolute inset dot z-0 pointer-events-none"></div>
            <Navbar />
            <div className=' px-4 space-y-4 py-24 fade-in z-50 w-full max-w-6xl '>
                <h2 className={`text-3xl font-extrabold text-center w-full`}>Visual Archive</h2>
                <p className='text-sm font-light text-center'>
                    A collection of captured moments, textures, and compositions that inspire my design thinking.
                </p>
                <div className="w-full col-span-full items-center !mt-10">
                    <Gallery />
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    )
}

export default DesignPage