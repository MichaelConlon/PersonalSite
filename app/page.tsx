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
        buttonText="Read More"
        buttonLink="/Experience"
      />
      <div className="flex w-full flex-col items-center mb-4 mt-8">
        <TitledText 
          className="w-11/12 lg:w-7/12"
          title="Write a title here. Click to edit and add your own."
          text="This is a paragraph area where you can add your own text. Just click “Edit Text” or double click here to add your own content and make changes to the font. It's a great place to tell a story about your business and let users know more about you."
          isDivided>
        </TitledText>
      </div>
      <div className="flex w-full flex-col items-center my-4">
        <AboutMe></AboutMe>
      </div>
      <div className="flex w-full flex-col items-center my-32">
        <TitleSection
          className="w-11/12 lg:w-7/12"
          title="Find the code for this site and other projects on my github page!">
        </TitleSection>
      </div>
      <div className="flex w-full flex-col items-center my-4">
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
