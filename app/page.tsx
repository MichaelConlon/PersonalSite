import Image from "next/image";
import Hero from "@/app/ui/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
    </main>
  );
}
