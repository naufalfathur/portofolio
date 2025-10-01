'use client'

import Link from 'next/link';
import { TDocFile } from '@/types';
import React, { useEffect, useState } from 'react'

interface DocFileProps {
    category: string
}

function DocFile({ category }: DocFileProps) {
    const [docFilesData, setDocFilesData] = useState<TDocFile | undefined>()
    const fileURL = docFilesData?.file?.fields?.file?.url ? `https:${docFilesData.file.fields.file.url}` : undefined;

    useEffect(() => {
        fetch('/api/docFiles')
            .then(res => res.json())
            .then((data: TDocFile[]) => {
                const docFile = data.find(docFile => docFile.category === category);
                setDocFilesData(docFile);
                console.log('server: contentful res', docFile);
            })
            .catch(err => console.error('Error fetching from API:', err));
    }, [category]);

    return (
        <div className='w-full flex-col space-y-4'>
            <iframe
                src={fileURL}
                className="w-full h-[80vh] border"
                title="Design Portfolio PDF"
            />
            <div className="text-center mt-4">
                <a
                    href={fileURL}
                    download
                    className={`text-2xl font-extrabold text-center w-full`}
                >
                    Download PDF
                </a>
            </div>

        </div>
    )
}

export default DocFile