import TitledText from "@/app/ui/titledText";
import backgroundImage from "@/public/work.jpg"

export default function ImageUnderlayCard(
    {title, text, buttonText, buttonLink, isExternalLink}:{title:string,text:string,buttonText:string, buttonLink:string, isExternalLink:boolean}
) {
        return <div className="relative w-11/12 lg:w-9/12 flex h-96 mt-60 lg:mt-24 flex-row justify-end h-max">
                <div style={{ backgroundImage: `url(${backgroundImage.src})`, }} className="absolute h-96 w-full lg:w-7/12 -top-60 lg:-top-24 lg:left-10" >
                </div>
                <div className="py-8 w-full w-full lg:w-8/12 z-10 bg-off-light dark:bg-off-dark">
                    <TitledText 
                        title={title}
                        text={text}
                        buttonText={buttonText}
                        buttonLink={buttonLink}
                        isExternalLink={isExternalLink}>
                    </TitledText> 
                </div>
        </div>
}