import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default async function UserDetailPage({ params }: { params: { id: string | number } }) {
    const user = await getUsers(params.id)
    return (
        <Card className="max-w-[400px] w-[400px] ml-4 mt-4" shadow='lg' isPressable>
            <CardHeader className="flex gap-3 bg-gray-400 font-bold">
                <div className="flex flex-col">
                    <p className="text-md">{user.name}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='bg-gray-300'>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </CardBody>
        </Card>
    );
}

async function getUsers(id: string | number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    return data.map((p: any) => {
        return {
            id: p.id.toString()
        }
    });
}

