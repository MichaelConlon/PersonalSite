import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
            <NavbarItem>
                <Link href="/" className="">About</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/" className="">Contact</Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/" className="">Blog</Link>
            </NavbarItem>

        </NavbarContent>
    </Navbar>
}