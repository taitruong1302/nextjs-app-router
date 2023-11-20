import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Header() {

    return (
        <Navbar className='bg-orange-100' classNames={{
            item: [
                "flex",
                "relative",
                "h-full",
                "items-center",
                "data-[active=true]:after:content-['']",
                "data-[active=true]:after:absolute",
                "data-[active=true]:after:bottom-0",
                "data-[active=true]:after:left-0",
                "data-[active=true]:after:right-0",
                "data-[active=true]:after:h-[2px]",
                "data-[active=true]:after:rounded-[2px]",
                "data-[active=true]:after:bg-primary",
            ]
        }}>
            <NavbarContent>
                <NavbarItem isActive>
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
