'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname()
    return (
        <Navbar className='bg-orange-100'>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/posts'}>
                    <Link color="foreground" href="/posts"  >
                        Posts
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/users'}>
                    <Link color="foreground" href="/users">
                        Users
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}
