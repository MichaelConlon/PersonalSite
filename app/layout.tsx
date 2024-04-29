import type { Metadata } from "next";
import {Providers} from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className='dark'>
      <body className={inter.  className="" }>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
