import {Divider, Button} from "@nextui-org/react";
import Link from "next/link"
import clsx from 'clsx';


export default function TitledText(
    {title, titleStyle, text, isDivided, buttonText, buttonLink, className, isExternalLink} 
    : {title: string, titleStyle?: string, text: string, isDivided?: boolean, buttonText?: string, buttonLink?: string, className?:string, isExternalLink?:boolean}) {

    return <div className={clsx(className, "flex flex-col my-4")}>
       
        <div className="flex flex-col py-2 lg:px-16 items-center lg:items-start">

            {/* Title */}
            <div className="flex md:pb-4">
                <p className={titleStyle ? `${titleStyle} text-center lg:text-left` : "text-5xl text-gray-600 font-medium text-center lg:text-left"}>{title}</p>
            </div>

            {/* Optional dividing line between title and text */}
            {isDivided ? (
                <div className="flex w-full justify-center lg:justify-start">
                <Divider className="w-1/12 my-12 py-0.5 bg-black" />
                </div>
            ) : (
                <div></div>
            )}
            
            {/* Text */}
            <div className="flex w-11/12 flex-col py-4 text-lg">
                { text.split('\\n').map(line => (<p key={line} className="mb-4 leading-loose text-gray-600">{line}</p>)) }
            </div>

            {/* Optional button with link at the bottom of the card */}
            {buttonText || buttonLink ? (
            <div className="flex w-full justify-center lg:justify-start">
                <Link target={isExternalLink?"blank":""} href={buttonLink? buttonLink : ""}>
                    <Button className="my-4 py-0.5 bg-orange-800 text-white">{buttonText}</Button>
                </Link>
            </div>
            ) : (
                <div></div>
            )}
        </div>
    </div>
} 