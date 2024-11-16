import React from 'react'
import { FaSearch } from 'react-icons/fa'


interface textSearch{
    onTextChange:(txt:string)=>void
    placeholder:string
}


const SearchBar = ({onTextChange,placeholder}:textSearch) => {
  return (
    <div className='flex justify-center items-center mx-auto relative w-full md:w-[40%]'>
        <FaSearch size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500' />
        <input type="text" className='h-12 pl-10 w-full text-gray-500 rounded-[30px] focus:outline-none shadow-sm shadow-gray-800' placeholder={placeholder} width={200} onChange={e=>onTextChange(e.target.value)} />
    </div>
  )
}

export default SearchBar