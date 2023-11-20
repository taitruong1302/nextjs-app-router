import React from 'react'
import { Input } from '@nextui-org/react'
import _, { set } from 'lodash'

export default function Search({ setSearch }: any) {
    console.log("Search Rendered");

    return (
        <div>
            <Input variant='bordered' type='text' label={'Search'} placeholder='What are you looking for?' onChange={
                _.debounce(e => setSearch(e.target.value), 500)
            } />
        </div>
    )
}
