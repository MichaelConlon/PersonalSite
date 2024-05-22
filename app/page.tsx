import Hero from "@/app/ui/hero";
import TitledText from "@/app/ui/titledText";
import TitleSection from "@/app/ui/titleSection";
import AboutMe from "@/app/ui/aboutMe"
import ImageUnderlayCard from "@/app/ui/imageUnderlayCard";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center">
      <Hero 
        title="Software Developer & Programming Enthusiast"
        subtext="Just another software developer who thought it'd be a good idea to make his own website"
        buttonText="Check me out on Github!"
        buttonLink="https://github.com/MichaelConlon"
      />
      <div className="flex w-full flex-col items-center mb-28 mt-48">
        <TitledText 
          className="w-11/12 lg:w-7/12"
          title="Welcome to My Personal Site!"
          text="Hello! I'm Michael, I built this site using React and Next.js as an excuse to play with Next.js an NextUI!. Explore my work and learn more about my professional journey on my github! And please excuse the design—I'm a developer, not a designer!"
          isDivided>
        </TitledText>
      </div>
      <div className="flex w-full flex-col items-center my-28">
        <AboutMe></AboutMe>
      </div>
      <div className="flex w-full flex-col items-center my-56">
        <TitleSection
          className="w-11/12 lg:w-7/12"
          title="Find the code for this site and other projects on my github page!">
        </TitleSection>
      </div>
      <div className="flex w-full flex-col items-center mt-28 mb-56">
        <ImageUnderlayCard
          title="Want to work together?"
          text="Whether you're interested in working together on a single project or offering me a job, I'm always happy to hear from you!" 
          buttonText="Get in Touch on LinkedIn!"
          buttonLink="https://www.linkedin.com/in/michaelbconlonjr/"
          isExternalLink
        />
      </div>
    </main>
  );
}
