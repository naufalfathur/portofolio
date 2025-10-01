
'use server'; // for App Router
import nodemailer from 'nodemailer';


type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export async function sendContactEmail({ name, email, message }: ContactFormData) {
    // Create transporter with your cPanel SMTP details
    const transporter = nodemailer.createTransport({
        host: 'mail.generatif.co',
        port: 465,
        secure: true, // SSL
        auth: {
            user: 'naufalfathur@generatif.co',
            pass: process.env.CPANEL_EMAIL_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: '"Inquiry @naufalfathur.is-a.dev" <naufalfathur@generatif.co>',
        to: 'naufalfathur@gmail.com',
        cc: 'naufalfathur@hotmail.com, naufalfathur@generatif.co',
        subject: `New message from ${name}`,
        html: `<p>${message}</p><p>From: ${email}</p>`,
    });
}