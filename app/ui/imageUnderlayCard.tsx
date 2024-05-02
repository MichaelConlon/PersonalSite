import TitledText from "@/app/ui/titledText";
import backgroundImage from "@/public/work.jpg"

export default function ImageUnderlayCard() {
        return <div className="relative w-9/12 flex h-96 mt-24 mb-8 flex-row justify-end h-max">
                <div style={{ backgroundImage: `url(${backgroundImage.src})`, }} className="absolute h-96 w-full lg:w-7/12 -top-24 lg:left-10" >
                </div>
                <div className="py-8 bg-white w-full lg:w-8/12 z-10">
                    <TitledText 
                        title="Want to work together?"
                        text="Whether you're interested in working together on a single project or offering me a job, I'm always happy to hear from you!" 
                        buttonText="Get in Touch!"
                        buttonLink="/">
                    </TitledText> 
                </div>
        </div>
}