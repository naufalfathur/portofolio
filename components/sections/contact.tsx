import React from 'react'
import { Button } from "@/components/ui/button"

function Contact() {
    return (
        <div className='container flex flex-col w-1/2 min-h-max my-60 justify-center text-center items-center p-0 space-y-4'>
            <p className="font-bold text-slate-500">Contact</p>
            <h2 className="animate-pulse scroll-m-20 text-5xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent mb-4">
                Work with me!</h2>
            <p className="font-bold text-slate-500">Ready to discuss your next project? Contact me today!</p>

            <Button className='w-fit py-6 font-bold'>Contact Me</Button>

        </div>
    )
}

export default Contact