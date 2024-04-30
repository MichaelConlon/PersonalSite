'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import Image from "next/image";



export default function Header() {
    const links = [
        {name: "About", href:"/About"},
        {name: "Contact", href:"/Contact"},
        {name: "Resume", href:"/Resume"} ]
    const pathname = usePathname();
    return <Navbar isBordered maxWidth="2xl" height="7rem" className="flex flex-col md:flex-row bg-neutral-600/75">
        <div className="">
            <NavbarBrand >
                <Link href="/">
                    <Image 
                        src="/signature_logo.png"
                        width={325}
                        height={93}
                        alt="Michael B Conlon Jr | Consultant Signature"
                    />
                </Link>
            </NavbarBrand>

        </div>
        <NavbarContent justify="center">
            {links.map(link => (
                <NavbarItem isActive={link.href===pathname} key={link.name}>
                    <Link size="lg" isBlock color="foreground" href={link.href}>{link.name}</Link>
                </NavbarItem>
            ))}

        </NavbarContent>
    </Navbar>
}