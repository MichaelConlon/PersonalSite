'use client'

import ExperienceBullet from "../ui/experienceBullet"
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import ExperienceTitle from "../ui/experienceTitle";

let experience = [
    {title:"Tech Lead | Primis Bank Project",
    key: "primis",
    bullets:
        ["Implemented and managed Extract, Transform, Load (ETL) processes at Primis Bank, facilitating seamless data transfer from Finxact banking core to legacy bank reporting tools."
    ,"Leveraged Java's Spring Batch framework to enhance efficiency by 250% through parallelizing the execution of the ETL pipeline, significantly reducing processing time and resource utilization."
    ,"Developed robust support and monitoring tools in Node.js to streamline troubleshooting, enhance visibility, and ensure the smooth operation of ETL pipelines, resulting in improved reliability and reduced downtime."
    ,"Mentored junior team members, providing guidance, support, and technical expertise to foster professional growth and development"
]},
    {title:"Lead Engineer | Delta Airlines Project",
    key: "delta",
    bullets:[
        "Architected technical solution for replacement of legacy systems"
        ,"Developed Implementation and upgrade plan for engineers to retire legacy systems and create modern java solutions with no downtime"
        ,"Worked closely with engineers and company leadership to build a solution that meets organization's business and technical requirements"
    ]},
    {title:"Full Stack Engineer | Denstply Sirona Project",
    key: "dentsply",
    bullets:[
        "Implemented customer facing website using reactJS and bootstrap"
        ,"Designed and built reactive front-end that interfaces with a Java back-end"
        ,"Implemented Java backend API architecture"
    ]},
    {title:"Backend Engineer | Bank of the West Project",
    key: "botw",
    bullets:[
        "Developed, maintained, and updated C#/.Net applications"
        ,"Designed and implemented core business APIs designed to be called by other micro-services"
        ,"Utilized agile practices to consistently deliver code on time"
        ,"Worked closely with client leadership to understand core business processes and implement the NACHA processing standard"
    ]}
]

let techSkills = [
    "C#, Java, JavaScript, NodeJS, Python",
    "React, NextJS, TailwindCss, HTML, CSS",
    "AWS, Docker, SQL, Linux",
    "Version Control (Git)"
]

let otherSkills = [
    "Consulting Soft Skills",
    " Online/Digital Banking - Finxact, NACHA, Zelle"

]

export default function Experience() {
    return <div className="flex bg-stone-100 justify-center">
        <div className="w-11/12 lg:w-8/12 py-16 bg-stone-100">
            <Accordion variant="bordered" defaultExpandedKeys={["work","education","skills"]} selectionMode="multiple">
                <AccordionItem key="work" aria-label="Work Experience" title="Work Experience" classNames={{title:"text-orange-800 text-4xl lg:text-5xl"}}>
                    <ExperienceTitle title="Endava" subtitle="Senior Software Consultant\nJun 2017 - August 2023"/>
                        {experience.map((item) =>  
                                <ExperienceBullet title={item.title} bullets={item.bullets} key={item.key} />
                        )}
                </AccordionItem>
                <AccordionItem key="education" aria-label="Education" title="Education" classNames={{title:"text-orange-800 text-4xl lg:text-5xl"}}>
                    <ExperienceBullet title="North Carolina State University" bullets={['Bachelor of Science (B.S.) Computer Science (Jun 2017)']}/>
                </AccordionItem>
                <AccordionItem key="skills" aria-label="Skills" title="Skills" classNames={{title:"text-orange-800 text-4xl lg:text-5xl",content:"flex flex-col lg:flex-row"}}>
                    <div className="w-full lg:w-3/6">
                        <ExperienceBullet title="Technology" bullets={techSkills}/>
                    </div>
                    <div className="w-full lg:w-3/6">
                        <ExperienceBullet title="Other" bullets={otherSkills}/>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
}