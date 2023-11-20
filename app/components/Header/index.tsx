import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const pathname = usePathname()
    return (
        <Navbar className='bg-orange-100'>
            <NavbarContent>
                <NavbarItem isActive={pathname === '/'}>
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
