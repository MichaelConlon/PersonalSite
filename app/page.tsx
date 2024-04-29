import Image from "next/image";
import Hero from "@/app/ui/hero";
import TitledText from "@/app/ui/titledText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-100">
      <Hero />
      <TitledText 
        title="Write a title here. Click to edit and add your own."
        text="This is a paragraph area where you can add your own text. Just click “Edit Text” or double click here to add your own content and make changes to the font. It's a great place to tell a story about your business and let users know more about you.">
      </TitledText>
    </main>
  );
}
