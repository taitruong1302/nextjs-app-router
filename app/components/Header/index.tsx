import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Header() {
    return (
        <Navbar className='bg-orange-100'>
            <NavbarContent>
                <NavbarItem>
                    <Link href="/" prefetch={false} className='hover:text-blue-500'>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/posts" prefetch={false} className='hover:text-blue-500'>
                        Posts
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/users" prefetch={false} className='hover:text-blue-500'>
                        Users
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}
