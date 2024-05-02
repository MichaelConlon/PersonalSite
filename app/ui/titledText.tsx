import {Divider, Button} from "@nextui-org/react";
import Link from "next/link"
import clsx from 'clsx';


export default function TitledText(
    {title, titleStyle, text, isDivided, buttonText, buttonLink, className} 
    : {title: string, titleStyle?: string, text: string, isDivided?: boolean, buttonText?: string, buttonLink?: string, className?:string}) {
    return <div className={clsx(className, "flex flex-col my-4 justify-center")}>
        <div className="flex flex-col py-2 px-16">

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
            <div className="flex w-full flex-col justify-left py-4 text-lg">
                { text.split('\\n').map(line => (<p key={line} className="mb-4 leading-loose text-gray-600">{line}</p>)) }
            </div>

            {/* Optional button with link at the bottom of the card */}
            {buttonText || buttonLink ? (
            <div className="flex w-1/12 justify-start justify-items-start items-left">
                <Link href={buttonLink? buttonLink : ""}>
                    <Button className="my-4 py-0.5 bg-black">{buttonText}</Button>
                </Link>
            </div>
            ) : (
                <div></div>
            )}
        </div>
    </div>
} 