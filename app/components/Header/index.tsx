import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Header() {
    return (
        <Navbar className='bg-orange-100'>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/posts">
                        Posts
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/users">
                        Users
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}
