export default function ExperienceTitle(
    {title, subtitle} : {title:string, subtitle?:string}
) {
    return <div className="flex flex-col text-start lg:text-center py-6">
            <h2 className="pr-8 pb-3 text-5xl lg:text-6xl text-orange-900">{title}</h2>
            {subtitle?.split("\\n").map((sub,index) => 
                <p className="pr-8 text-2xl lg:text-3xl text-orange-900" key={`${sub} - ${index}`}>{sub}</p>
            )}
        </div>
}