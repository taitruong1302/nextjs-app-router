'use client'
import Link from 'next/dist/client/link';
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import Search from '../Search/Search';

export default function PostList({ data }: any) {
    const [search, setSearch] = useState("")
    return (
        <div className='w-full flex flex-col gap-2'>
            <Search setSearch={setSearch} />
            <Table >
                <TableHeader>
                    <TableColumn className='text-lg'>
                        Title
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((post: any) => {
                        if (post.title.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <TableRow key={post.id}>
                                    <TableCell>
                                        <Link href={`/posts/${post.id}`} className='text-medium text-blue-500 visited:text-purple-600 hover:underline underline-offset-1'>
                                            {post.title}
                                        </Link>
                                        <hr />
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
