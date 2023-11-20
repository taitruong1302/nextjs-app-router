'use client'
import Link from 'next/dist/client/link';
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import Search from '../Search/Search';
import { Pagination } from "@nextui-org/react";

export default function UserList({ data }: any) {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className='w-full flex flex-col gap-2'>
            <Search setSearch={setSearch} />
            <Table aria-label='user list'>
                <TableHeader>
                    <TableColumn className='text-lg bg-gray-300'>
                        Name
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((user: any, index: number) => {
                        if (search && user.name.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Link href={`/users/${user.id}`} className='text-medium text-blue-500 visited:text-purple-600 hover:underline underline-offset-1'>
                                            {user.name}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                        else if (!search && index < currentPage * 5 && index >= (currentPage - 1) * 5) {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Link href={`/users/${user.id}`} className='text-medium text-blue-500 visited:text-purple-600 hover:underline underline-offset-1'>
                                            {user.name}
                                        </Link>
                                        <hr />
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
            {!search && <Pagination total={Math.round(data.length / 5)} initialPage={1} onChange={(page: number) => { setCurrentPage(page) }} />}
        </div>
    );
}
