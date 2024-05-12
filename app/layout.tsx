import type { Metadata } from "next";
import {Providers} from "./providers";
import { lora } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import "./globals.css";
import Footer from "@/app/ui/footer";
import { DarkModeToggle } from "./ui/darkModeToggle";

export const metadata: Metadata = {
  title: "Michael B Conlon Jr - Consultant",
  description: "Personal Website built by Michael Conlon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${lora.className} antialiased min-h-svh flex flex-col bg-stone-100 dark:bg-neutral-800 text-gray-600 dark:text-slate-200`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
