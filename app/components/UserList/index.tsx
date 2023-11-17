'use client'
import Link from 'next/dist/client/link';
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import Search from '../Search/Search';

export default function UserList({ data }: any) {
    const [search, setSearch] = useState("")
    return (
        <div>
            <Search setSearch={setSearch} />
            <Table>
                <TableHeader>
                    <TableColumn className='text-lg'>
                        Name
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((user: any) => {
                        if (user.name.includes(search))
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Link href={`/users/${user.id}`} className='text-medium text-blue-500 visited:text-purple-600 hover:underline underline-offset-1'>
                                            {user.name}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
