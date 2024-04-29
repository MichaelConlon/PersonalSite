import Image from "next/image"

export default function Hero() {

    return (
        <Image 
            src="/hero-image.jpg"
            className=""
            height={4084}
            width={10147}
            alt="Picture of the Charlotte Skyline"
        />
    )
}