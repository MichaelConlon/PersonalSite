import TitledText from "@/app/ui/titledText";
import backgroundImage from "@/public/work.jpg"

export default function ImageUnderlayCard() {
        return <div className="relative w-9/12 flex h-96 mb-24">
                <div style={{ backgroundImage: `url(${backgroundImage.src})`, }} className="absolute h-96 w-7/12 top-0 left-10" >
                </div>
                <div className="absolute top-24 py-8 right-0 bg-white w-8/12">
                    <TitledText 
                        title="Want to work together?"
                        text="Whether you're interested in working together on a single project or offering me a job, I'm always happy to hear from you!" 
                        buttonText="Get in Touch!"
                        buttonLink="/">
                    </TitledText>
                </div>
        </div>
}