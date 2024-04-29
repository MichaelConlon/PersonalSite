import Image from "next/image"
import {Button} from "@nextui-org/react"
import backgroundImage from "@/public/hero-image.jpg"

export default function Hero() {
    return (
        <div 
            style={{ backgroundImage: `url(${backgroundImage.src})`, }}
            className="w-full bg-cover bg-center"
        >
            <div className="columns-2 w-full h-full flex flex-col md:flex-row  backdrop-blur-sm  backdrop-brightness-25  bg-blend-darken py-6 lg:py-20 px-4 lg:px-20">
                <div className="md:w-5/12 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <p className="text-5xl leading-loose lg:text-6xl px-32 text-center lg:text-left">
                            Software Consultant & Programming Enthusiast
                        </p>
                    </div>
                </div>

                <div className="md:w-7/12 w-full h-72 flex flex-col items-center">
                    <div className="flex h-4/6 w-1/2 items-center">
                        <h2 className="text-2xl text-slate-100 text-center leading-relaxed">
                            Just another software developer who blogs in his free time
                        </h2>
                    </div>
                    <div className="flex h-1/3">
                        <div className="flex w-full align-middle items-center">
                            <Button variant="ghost" color="primary">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}