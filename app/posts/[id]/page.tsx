import React from 'react';

export default async function DetailPostPage({ params }: { params: { id: string | number } }) {
    const post = await getPosts(params.id)
    return (
        <div>
            <h1 className='font-bold text-lg'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

async function getPosts(id: string | number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

export async function generateStaticParams() {
    const data = await getPosts("")
    return data.map((p: any) => {
        return {
            id: p.id.toString()
        }
    })
}