'use client'

import ExperienceBullet from "../ui/experienceBullet"
import {Accordion, AccordionItem} from "@nextui-org/accordion";

let endavaExperience = [
    {title:"Tech Lead | Primis Bank Project",
    key: "primis",
    bullets: [
        "Implemented and managed Extract, Transform, Load (ETL) processes at Primis Bank, facilitating seamless data transfer from Finxact banking core to legacy bank reporting tools."
        ,"Leveraged Java's Spring Batch framework to enhance efficiency by 250% through parallelizing the execution of the ETL pipeline, significantly reducing processing time and resource utilization."
        ,"Developed robust support and monitoring tools in Node.js to streamline troubleshooting, enhance visibility, and ensure the smooth operation of ETL pipelines, resulting in improved reliability and reduced downtime."
        ,"Mentored junior team members, providing guidance, support, and technical expertise to foster professional growth and development"
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

let turqExperience = [
    {title:"Lead Developer - Full Stack",
    key: "primis",
    bullets: [
        "pearheaded development, deployment, and monitoring initiatives as Lead Software Engineer, utilizing Java backend, Amazon RDS database, React frontend, and Netlify/Docker/AWS for seamless deployment processes."
        ,"Managed issues and contributions to the public GitHub repository, ensuring adherence to code quality standards and facilitating collaboration among team members."
        ,"Maintained accountability for all aspects of the software development lifecycle, from conception to deployment, ensuring efficient delivery of high-quality solutions"
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
    return <div className="flex justify-center h-full">
        <div className="w-11/12 lg:w-8/12 py-32">
            <Accordion variant="bordered" defaultExpandedKeys={["endava","turq","education","skills"]} selectionMode="multiple">
                <AccordionItem key="endava" aria-label="Endava" title="Endava" subtitle="Jun 2017 - Aug 2023" classNames={{title:"text-accent text-4xl lg:text-4xl"}}>
                        {endavaExperience.map((item) =>  
                            <ExperienceBullet title={item.title} bullets={item.bullets} key={item.key} />
                        )}
                </AccordionItem>
                <AccordionItem key="turq" aria-label="Turq" title="Turq" subtitle="Jun 2020 - Oct 2021" classNames={{title:"text-accent text-4xl lg:text-4xl"}}>
                        {turqExperience.map((item) =>  
                            <ExperienceBullet title={item.title} bullets={item.bullets} key={item.key} />
                        )}
                </AccordionItem>
                <AccordionItem key="education" aria-label="Education" title="Education" subtitle="August 2013 - May 2017" classNames={{title:"text-accent text-4xl lg:text-4xl"}}>
                    <ExperienceBullet title="North Carolina State University" bullets={['Bachelor of Science (B.S.) Computer Science (Jun 2017)']}/>
                </AccordionItem>
                <AccordionItem key="skills" aria-label="Skills" title="Skills" classNames={{title:"text-accent text-4xl lg:text-4xl",content:"flex flex-col lg:flex-row"}}>
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