import React from 'react';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import UserList from '../components/UserList';

export default async function App() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return (
        <div>
            <h1 className='text-3xl ml-4 font-medium'>List Users</h1>
            <Suspense fallback={<Loading />}>
                <UserList data={data} />
            </Suspense>
        </div>
    );
}
