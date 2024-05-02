import clsx from 'clsx';

export default function TitleSection(
    {title, titleStyle, className} 
    : {title: string, titleStyle?: string, className?:string}) {
    return <div className={clsx(className, "flex flex-col my-4 justify-center")}>
        <div className="flex flex-col py-2 px-16">

            {/* Title */}
            <div className="flex md:pb-4">
                <p className={titleStyle ? `${titleStyle} text-center lg:text-left` : "text-5xl text-gray-800 font-medium text-center"}>{title}</p>
            </div>
        </div>
    </div>
} 