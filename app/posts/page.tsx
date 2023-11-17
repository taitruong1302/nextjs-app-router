import React, { Suspense } from 'react';
import Loading from '@/app/loading';
import PostList from '../components/PostList';


export default async function PostListPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return (
        <div>
            <h1 className='text-3xl ml-4 font-medium'>List Posts</h1>
            <PostList data={data} />
        </div>
    );
}
