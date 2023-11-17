import React from 'react';

export default async function UserDetailPage({ params }: { params: { id: string | number } }) {
    const user = await getUsers(params.id)
    return (
        <div className='ml-4'>
            <h1 className='font-bold text-lg'>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
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

