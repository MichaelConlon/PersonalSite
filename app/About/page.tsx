import Image from "next/image"
import Hero from "@/app/ui/hero";
import TitledText from "@/app/ui/titledText";

export default function Page() {
    return <div>
        <Hero
            title="About Me"
        />
        <div className="flex w-full flex-col lg:flex-row bg-stone-200 my-4">
            <div className="flex w-full block lg:hidden p-12 justify-center">
                <Image
                    src="/michael_conlon.jpg"
                    width="384"
                    height="344"
                    alt="Profile photo of Michael B Conlon Jr"
                    sizes="100vw"
                    style={{ width: '384', height: 'auto' }}>
                </Image>
            </div>
            <div className="flex hidden lg:block w-5/12 justify-center p-12">
                <Image
                    src="/michael_conlon.jpg"
                    width="344"
                    height="488"
                    alt="Profile photo of Michael B Conlon Jr"
                    sizes="100vw"
                    style={{ width: 'auto', height: '488' }}>
                </Image>
            </div>

            <div className="flex w-full lg:w-7/12 justify-center lg:justify-start lg:p-2">
                <TitledText 
                className="w-11/12 lg:w-6/12"
                title="Michael Bennett Conlon Jr"
                titleStyle="text-orange-800 text-5xl font-medium"
                text="With over seven years of professional experience in software consulting, I've had the privilege of diving deep into the world of technology and Finance and crafting solutions that make a difference. Based in the vibrant city of Charlotte, North Carolina, I thrive on the dynamic challenges that come with being a software developer. \n
                My expertise lies primarily in .NET and Java development, where I've honed my skills through countless projects, from large-scale enterprise applications to small, intricate backend systems. But my journey doesn't stop there. I've also delved into the realms of Golang and React, embracing new technologies and frameworks to expand my toolkit and tackle diverse projects with creative solutions and the tools that fit the job!\n
                Whether it's architecting robust backend systems, crafting intuitive user interfaces, or optimizing performance through elegant code, I'm driven by a passion for excellence and a commitment to delivering solutions that exceed expectations.\n
                Beyond coding, I'm an avid learner, constantly exploring emerging technologies and staying ahead of industry trends. I believe in the power of collaboration and thrive in environments where ideas flow freely, challenges are embraced, and innovation is celebrated.\n
                When I'm not immersed in lines of code, you'll find me exploring the vibrant culinary scene of Charlotte, hitting the trails for a hike, or relaxing in one of the cities many coffee shops.\n
                Let's connect and explore how we can turn your ideas into reality, one line of code at a time!"
                isDivided>
                </TitledText>
            </div>
        </div>
    </div>
}