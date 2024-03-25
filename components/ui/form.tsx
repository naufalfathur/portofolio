'use client'

import React from 'react'
import { InputWithLabel } from './input'
import { SendHorizontal } from 'lucide-react'

interface FormProps {
    title: string,
}


function Form({ title }: FormProps) {
    return (
        <div className='flex flex-col space-y-2 w-full'>
            <div className="chat chat-start">
                <div className=" text-3xl font-extrabold  chat-bubble">{title}</div>
            </div>
            <InputWithLabel title={'Name'}></InputWithLabel>
            <InputWithLabel title={'Email'} type='email'></InputWithLabel>
            <InputWithLabel title={'Your Message'} type='text' isTextArea={true}></InputWithLabel>
            <button className="btn btn-neutral w-fit self-end">
                Submit
                <SendHorizontal />
            </button>
        </div>
    )
}

export default Form