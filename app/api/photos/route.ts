import { NextResponse } from 'next/server';

export async function GET() {
    const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
    const API_KEY = process.env.CLOUDINARY_API_KEY!;
    const API_SECRET = process.env.CLOUDINARY_API_SECRET!;
    const FOLDER_NAME = 'Portf';

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?prefix=${FOLDER_NAME}/&max_results=60`,
        {
            headers: {
                Authorization:
                    'Basic ' + Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64'),
            },
        }
    );

    const data = await res.json();

    // Return only the URLs for convenience
    const images = data.resources.map((img: any) => ({
        url: img.secure_url,
        public_id: img.public_id,
        created_at: img.created_at,
    }));

    return NextResponse.json(images);
}