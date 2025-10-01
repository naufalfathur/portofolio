'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface Photo {
    url: string;
    public_id: string;
    created_at: string;
}

function Gallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true); // 👈 new loading state

    useEffect(() => {
        fetch('/api/photos')
            .then(res => res.json())
            .then((data: Photo[]) => {
                const sorted = [...data].sort(
                    (a, b) =>
                        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );
                setPhotos(sorted);
            })
            .catch(console.error)
            .finally(() => setLoading(false)); // 👈 stop loading after fetch
    }, []);

    return (
        <div className='w-full h-full flex-col space-y-4 items-center'>
            <div className="columns-2 md:columns-3 gap-4">
                {loading
                    ?
                    Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className="skeleton w-full mb-4 h-64 rounded-lg"
                        ></div>
                    ))
                    :
                    photos.map((photo) => (
                        <div className='' key={photo.public_id}>
                            <Image
                                key={photo.public_id}
                                src={photo.url}
                                alt=""
                                width={400}
                                height={0}
                                quality={90}
                                className="w-full mb-4 rounded-lg shadow-md break-inside-avoid object-cover hover:outline hover:outline-4 hover:outline-gray-700/50 transition-all duration-300"
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Gallery