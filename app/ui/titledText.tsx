import {Button} from "@nextui-org/button";
import {Divider} from "@nextui-org/divider";
import Link from "next/link"
import clsx from 'clsx';


export default function TitledText(
    {title, titleStyle, text, isDivided, buttonText, buttonLink, className, isExternalLink} 
    : {title: string, titleStyle?: string, text: string, isDivided?: boolean, buttonText?: string, buttonLink?: string, className?:string, isExternalLink?:boolean}) {

    return <div className={clsx(className, "flex flex-col my-4")}>
       
        <div className="flex flex-col py-2 lg:px-16 items-center lg:items-start">

            {/* Title */}
            <div className="flex md:pb-4">
                <p className={titleStyle ? `${titleStyle} text-center lg:text-left` : "text-5xl font-medium text-center lg:text-left"}>{title}</p>
            </div>

            {/* Optional dividing line between title and text */}
            {isDivided ? (
                <div className="flex w-full justify-center lg:justify-start">
                <Divider className="w-1/12 my-12 py-0.5 bg-dark dark:bg-light" />
                </div>
            ) : (
                <div></div>
            )}
            
            {/* Text */}
            <div className="flex w-11/12 flex-col py-4 text-lg">
                { text.split('\\n').map(line => (<p key={line} className="mb-4 leading-loose">{line}</p>)) }
            </div>

            {/* Optional button with link at the bottom of the card */}
            {buttonText || buttonLink ? (
            <div className="flex w-full justify-center lg:justify-start">
                <Link passHref legacyBehavior target={isExternalLink?"blank":""} href={buttonLink? buttonLink : ""}>
                    <Button className="my-4 py-0.5 bg-accent text-light">{buttonText}</Button>
                </Link>
            </div>
            ) : (
                <div></div>
            )}
        </div>
    </div>
} 