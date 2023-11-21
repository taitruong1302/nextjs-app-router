'use client'
import Link from 'next/dist/client/link';
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import Search from '../Search/Search';
import { Pagination } from "@nextui-org/react";

export default function PostList({ data }: any) {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div className='w-full flex flex-col gap-2'>
            <Search setSearch={setSearch} />
            <Table aria-label='post list'>
                <TableHeader>
                    <TableColumn className='text-lg bg-gray-300'>
                        Title
                    </TableColumn>
                </TableHeader>
                <TableBody items={data}>
                    {data.map((post: any, index: number) => {
                        if (search && post.title.toLowerCase().includes(search.toLowerCase())) {
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
                        else if (!search && index < currentPage * 5 && index >= (currentPage - 1) * 5) {
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
            {!search && <Pagination size='lg' showControls total={Math.round(data.length / 5)} initialPage={1} onChange={(page: number) => { setCurrentPage(page) }} />}

        </div>
    )
}
