import React from 'react'
import { useSelector } from 'react-redux'
import { SearchForm } from './SearchForm'

export const SearchFormContainer = () => {
    // const { liveData } = useSelector((state) => { return state.nameList })
    const { liveData } = useSelector((state) => { return state.nameList })
    return (
        <div>
            <h1 className='text-center text-light'>
                Live Data  <h2 className='text-info bg-dark-subtle'> {liveData}</h2>
            </h1>
            <SearchForm />

        </div >
    )
}
