import React, { useState } from 'react'
import TextCard from '../../components/TextCard/TextCard'
import NoteList from '../../containers/NoteList'
import SearchBar from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'




const NoteBrowse = () => {
  const [searchText,setSearchText] = useState("")
  const noteList = useSelector((store:RootState)=>store.NOTE.noteList)
  const filteredList = noteList?.filter(note=>{
    const containerTitle = note?.title.trim().toUpperCase().includes(searchText.toUpperCase())
    const containerContent = note?.content.trim().toUpperCase().includes(searchText.toUpperCase())
    return containerTitle || containerContent
  })
  console.log(filteredList)
  return (
    <>
      <SearchBar placeholder='Search your note...' onTextChange={setSearchText}/>
      {
        noteList?.length ===0 && (
          <div className='flex justify-center mt-8'>
              <span className='text-xl inline-flex gap-x-1 items-center'>Vous n'avez pas de note, voulez vous en{" "} 
                <Link to={"/note/new"} className='text-blue-500  m-0 p-0'>Créer une</Link> </span>
          </div>
        )
      }
      <NoteList noteList={filteredList}/>
    </>
       
  )
}
export default NoteBrowse