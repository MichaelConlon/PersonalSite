import Link from "next/link"
import {Button} from "@nextui-org/react"
import backgroundImage from "@/public/hero-image.jpg"

export default function Hero(
    {title, subtext, buttonText, buttonLink} :
    {title: string, subtext?: string, buttonText?: string, buttonLink?: string}) {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage.src})`, }} className="w-full bg-cover bg-center" >
            <div className="columns-2 w-full flex flex-col md:flex-row  backdrop-blur-sm  backdrop-brightness-25  bg-blend-darken lg:py-20 px-4 lg:px-20">

                {/* Title */}
                <div className="w-full md:w-6/12 flex flex-col justify-center items-center pt-8 pb-0 md:pb-8 md:pl-24">
                    <div className="flex justify-center items-center w-10/12">
                        <p className="text-5xl px-0 leading-tight lg:leading-tight lg:text-6xl text-center lg:text-left">
                            {title}
                        </p>
                    </div>
                </div>

                {/* Optional Subtext */}
                <div className="md:w-6/12 w-full flex flex-col items-center py-8 align-middle">
                    { subtext ? (
                        <div className="flex h-1/3 w-11/12 lg:w-1/2 my-8 items-center">
                            <h2 className="text-2xl text-slate-100 text-center leading-relaxed">
                                {subtext}
                            </h2>
                        </div>
                        ) : (
                            <div></div>
                        )
                    }

                    {/* Optional button */}
                    <div className="flex h-1/2">
                        { buttonText || buttonLink ? (
                            <div className="flex w-full align-middle items-center">
                                <Link href={buttonLink ? buttonLink : ""} >
                                    <Button variant="ghost" className="text-white border-orange-800" size="lg">{buttonText}</Button>
                                </Link>
                            </div>
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}