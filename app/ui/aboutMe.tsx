import Image from "next/image"
import TitledText from "@/app/ui/titledText"

export default function aboutMe() {

    return <div className="flex flex-col-reverse lg:flex-row w-9/12 lg:w-10/12 bg-stone-100">

        {/* Image - hide on smaller screens */}
        <div className="flex flex-row w-full xl:w-8/12 bg-white justify-center">
            <TitledText 
                className="w-10/12"
                title="Michael B Conlon Jr"
                text="With over seven years of professional software consulting experience, I've been involved projects at every scale from the smallest startups to fortune 100 companies. I'm always looking for the next exciting challenge!"
                buttonText="Learn More About Me"
                buttonLink="/About">
            </TitledText>

        </div>

        {/* Image - hide on smaller screens */}
        <div className="flex w-full xl:w-4/12 bg-white justify-center lg:justify-end p-6 lg:p-2 ">
            <Image
                src="/michael_conlon.jpg"
                width="0"
                height="0"
                alt="Profile photo of Michael B Conlon Jr"
                sizes="100vw"
                style={{ width: 'auto', height: '448px' }}>
            </Image>
        </div>
    </div>
}