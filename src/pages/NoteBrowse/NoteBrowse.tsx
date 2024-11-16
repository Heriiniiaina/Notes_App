import React, { useState } from 'react'
import TextCard from '../../components/TextCard/TextCard'
import NoteList from '../../containers/NoteList'
import SearchBar from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'




const NoteBrowse = () => {
  const [searchText,setSearchText] = useState("")
  const noteList = useSelector((store:RootState)=>store.NOTE.noteList)
  const filteredList = noteList.filter(note=>{
    const containerTitle = note.title.trim().toUpperCase().includes(searchText.toUpperCase())
    const containerContent = note.content.trim().toUpperCase().includes(searchText.toUpperCase())
    return containerTitle || containerContent
  })
  console.log(filteredList)
  return (
    <>
      <SearchBar placeholder='Search your note...' onTextChange={setSearchText}/>
      <NoteList noteList={filteredList}/>
    </>
       
  )
}
export default NoteBrowse