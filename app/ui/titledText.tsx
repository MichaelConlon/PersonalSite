import {Divider} from "@nextui-org/react";

export default function TitledText({title, text} : {title: string, text: string}) {
    return <div className="flex flex-col w-full bg-stone-200 items-center my-4">
        <div className="flex w-5/12 flex-col my-16">
            <div className="flex md:py-8">
                <p className="text-3xl text-gray-600 font-medium text-left">{title}</p>
            </div>
            <div className="flex w-1/12 justify-start justify-items-start items-left">
               <Divider className="my-4 py-0.5 bg-black" />
            </div>
            <div className="flex w-full justify-left md:py-8">
                <p className="leading-loose text-gray-600">{text}</p>
            </div>
        </div>
    </div>
} 