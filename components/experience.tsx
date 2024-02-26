import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from './ui/separator'

const experiencesList = [
    {
        employer: "TDCX Malaysia",
        position: "Front End Developer (Google Tech Specialist)",
        time: "Sept 2021-Present",
        descriptions: [
            "Efficiently optimizing clients site, CMS and data to enhance its business value with Google codes and Ad services integration.",
            "Delivered improvements and analysis on clients digital advertising experiences by generating valuable business data which resulted in ROI and conversion rates increments.",
            "Collaborated within a cross-market team and enhanced team productivity by proactively developing custom code and tools, creating feedback sessions that refine internal CRM & ERP, resulting in a high percentage of reduction in quality errors."
        ]
    }, {
        employer: "Huacomm Telecommunications",
        position: "Software Developer",
        time: "March-Aug 2021",
        descriptions: [
            "Succeeded in digitalizing company’s internal workflow with development of HR Management system for data centralization process, employee data, payroll, and attendance management.",
            "Managing the full software development life cycle and also strategized on publishing the company's internal digital workflow system as an external product for additional company’s revenue sources .",
            "Appointed as the project team leader in the second month of internship in achieving the development earlier than target in the pandemic condition.",
            "Working on more than 5 system projects in less than 6 months of internship, both for external and internal system clients."
        ]
    }
]

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