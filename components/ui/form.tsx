'use client'

import React, { useState } from 'react'
import { InputWithLabel } from './input'
import { SendHorizontal } from 'lucide-react'

interface FormProps {
    title: string,
}


function Form({ title }: FormProps) {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(){
        window.open(`mailto:fathur@generatif.co?subject=${subject}&body=${message}`, '_blank', 'noopener,noreferrer');
      }


    return (
        <div className='flex flex-col space-y-2 md:w-full'>
            <div className="chat chat-start">
                <div className=" text-3xl font-extrabold  chat-bubble">{title}</div>
            </div>
            <InputWithLabel title={'Subject'}  onChange={(e) => setSubject(e.target.value)} type="text" value={subject}></InputWithLabel>
            <InputWithLabel title={'Your Message'} type='text' isTextArea={true} onChange={(e) => setMessage(e.target.value)} value={message} ></InputWithLabel>
            <button className="btn btn-neutral w-fit self-end" onClick={sendEmail}>
                Submit
                <SendHorizontal />
            </button>
        </div>
    )
}

export default Form