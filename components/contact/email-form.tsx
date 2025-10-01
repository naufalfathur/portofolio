'use client'

import React, { useState } from 'react'
import { sendContactEmail } from '@/app/actions/sendContactEmail';

interface EmailFormProps {
    title: string,
}

function EmailForm({ title }: EmailFormProps) {
    const [status, setStatus] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false); // ⬅️ new loading state

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;

        const data = Object.fromEntries(new FormData(form).entries()) as {
            name: string;
            email: string;
            message: string;
        };

        try {
            setIsSending(true);          // disable the button
            setStatus(null);             // clear previous status
            await sendContactEmail(data);
            setStatus("Message sent successfully!");
            form.reset();
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message.");
        } finally {
            setIsSending(false);         // re-enable button
        }
    };

    return (
        <div className='flex flex-col space-y-2 md:w-full'>
            <div className="chat chat-start">
                <div className="text-3xl font-extrabold chat-bubble">{title}</div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="input" type="text" name="name" placeholder="Your Name" required />
                <input className="input" type="email" name="email" placeholder="Email" required />
                <textarea className='textarea' name="message" placeholder="Message" required />

                <button
                    type="submit"
                    disabled={isSending}
                    className={`rounded-md font-bold py-2 px-8 shadow-xl cursor-pointer transition-colors 
            ${isSending ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-[#1F2937] text-white hover:text-yellow-500'}`}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </button>

                {status && <p>{status}</p>}
            </form>
        </div>
    );
}

export default EmailForm;