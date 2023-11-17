import React from 'react'
import { Input } from '@nextui-org/react'

export default function Search({ setSearch }: any) {
    return (
        <div>
            <Input type='text' label={'Search'} placeholder='What are you looking for?' onChange={e => setSearch(e.target.value)} />
        </div>
    )
}
