import React from 'react';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import UserList from '../components/UserList';

export default async function App() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return (
        <div className='flex flex-col items-center'>
            <div className='w-1/2 flex flex-col gap-2'>
                <h1 className='text-3xl font-medium mt-2'>List Users</h1>
                <Suspense fallback={<Loading />}>
                    <UserList data={data} />
                </Suspense>
            </div>
        </div>
    );
}
