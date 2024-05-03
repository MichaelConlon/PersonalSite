'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";

const links = [
    {name: "Home", href:"/", isMenuOnly: true},
    {name: "About", href:"/About", isMenuOnly: false},
    {name: "Contact", href:"/Contact", isMenuOnly: false},
    {name: "Experience", href:"/Experience", isMenuOnly: false} ]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    return <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl" height="7rem" className="bg-neutral-600/75">
        <NavbarContent className="gap-8">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden gap-4"
            />
            <NavbarBrand className="justify-end sm:justify-start">
                <Link href="/">
                    <Image 
                        src="/signature_logo.png"
                        width={325}
                        height={93}
                        alt="Michael B Conlon Jr | Consultant Signature"
                    />
                </Link>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {links.map((link, index) => (
                !(link.isMenuOnly) ? (
                    <NavbarItem isActive={link.href===pathname} key={`${link.name}-${index}`}>
                        <Link size="lg" isBlock color="foreground" href={link.href}>{link.name}</Link>
                    </NavbarItem>
                ) : (
                    <div key={`${link.name}-${index}`}></div>
                )
            ))}

        </NavbarContent>
        <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem isActive={link.href===pathname} key={`${link.name}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              href={link.href}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
}