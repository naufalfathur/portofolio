import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '../ui/separator'

import {experiencesList} from '../../public/data/experience'

function Experience() {

    return (
        <div className='container flex flex-col w-1/2 min-h-max text-center my-60 p-0'>
            <p className="font-bold text-slate-500">Experiences</p>
            <h2 className="animate-pulse scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
                Where I’ve Worked</h2>
            <div className=' w-full my-6'>
                <Tabs defaultValue={experiencesList[0].employer} className="w-full flex flex-row">
                    <TabsList className='flex flex-col text-start justify-start h-auto bg-transparent'>
                        {
                            experiencesList.map((experience, i) => (
                                <>
                                    <TabsTrigger className="w-full text-start justify-start data-[state=active]:bg-muted" value={experience.employer} key={i}>{experience.employer}</TabsTrigger>
                                </>
                            ))
                        }
                    </TabsList>
                    <Separator orientation="vertical" className="mx-2 h-auto"/>
                    {
                        experiencesList.map(({ employer, descriptions, time, position }, i) => (

                            <TabsContent value={employer} key={i} >
                                <div className='container flex flex-col text-start py-0 space-y-2'>
                                    <h3 className='font-semibold text-xl text-[#4485FD]'>{position} @{employer}</h3>
                                    <p className='font-regular text-sm text-slate-500'>{time}</p>
                                    <ul className='list-disc container space-y-2 text-sm text-muted-foreground'>
                                        {descriptions.map((desc) => (
                                            <li>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>

        </div>
    )
}

export default Experience