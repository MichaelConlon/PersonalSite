export default function ExperienceBullet(
    {title, bullets}: {title: string, bullets: string[]}
) {
    return <div className="flex flex-col items-end">
        <div className="flex w-11/12">
            <p className="text-3xl py-8 text-gray-600">{title}</p>
        </div>
        <div className="flex w-10/12">
            <div className="flex w-10/12">
                <ul>
                    {bullets.map((bullet, index) => 
                        <li className="py-3 text-gray-600 text-xl" key={`${bullet} -${index}`}> {`- ${bullet}`} </li>
                    )}
                </ul>
            </div>
        </div>
    </div>
}