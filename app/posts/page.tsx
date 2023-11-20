import React, { Suspense } from 'react';
import Loading from '@/app/loading';
import PostList from '../components/PostList';


export default async function PostListPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return (
        <div className='flex flex-col items-center'>
            <div className='w-1/2 flex flex-col gap-2'>
                <h1 className='text-3xl font-medium mt-2'>List Posts</h1>
                <Suspense fallback={<Loading />}>
                    <PostList data={data} />
                </Suspense>
            </div>
        </div>
    );
}
