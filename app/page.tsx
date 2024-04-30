import Hero from "@/app/ui/hero";
import TitledText from "@/app/ui/titledText";
import AboutMe from "@/app/ui/aboutMe"

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-stone-100">
      <Hero 
        title="Software Consultant & Programming Enthusiast"
        subtext="Just another software developer who blogs in his free time"
        buttonText="Read More"
        buttonLink="/Blog"
      />
      <div className="flex w-full flex-col bg-stone-200 items-center my-4">
        <TitledText 
          className="w-9/12 lg:w-5/12"
          title="Write a title here. Click to edit and add your own."
          text="This is a paragraph area where you can add your own text. Just click “Edit Text” or double click here to add your own content and make changes to the font. It's a great place to tell a story about your business and let users know more about you."
          isDivided>
        </TitledText>
      </div>
      <AboutMe></AboutMe>
    </main>
  );
}
