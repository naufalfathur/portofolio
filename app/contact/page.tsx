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
            <div className='px-[15vw] space-y-4 py-10 text-center'>
                <Form title='Interested to collaborate ?' />
            </div>
            <Footer />
        </main>
    )
}

export default ProjectsPage