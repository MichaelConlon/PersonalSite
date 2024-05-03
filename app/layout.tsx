import type { Metadata } from "next";
import {Providers} from "./providers";
import { lora } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import "./globals.css";
import Footer from "@/app/ui/footer";

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
    <html lang="en" className='light'>
      <body className={`${lora.className} antialiased`}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
