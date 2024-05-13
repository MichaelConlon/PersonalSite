import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { DarkModeToggle } from "@/app/ui/darkModeToggle"

export default function Footer() {
    return <div className="grow flex items-end bg-off-dark">
        <div className="h-32 min-h-32 w-full flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <DarkModeToggle />
            </div> 
        </div> 
        <div className="h-32 min-h-32 w-full flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <a href="https://github.com/MichaelConlon" target="_blank" className="px-6" style={{color: "#edffee",}}>
                    <FontAwesomeIcon icon={faGithub} size="lg" className="h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/michaelbconlonjr/" target="_blank" className="px-6" style={{color: "#edffee",}}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="h-6"/>
                </a>
            </div> 
        </div> 
    </div>
    }