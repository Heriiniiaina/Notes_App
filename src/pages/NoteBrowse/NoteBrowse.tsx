import React from 'react'
import TextCard from '../../components/TextCard/TextCard'
import NoteList from '../../containers/NoteList'
import SearchBar from '../SearchBar/SearchBar'




const NoteBrowse = () => {
  return (
    <>
      <SearchBar placeholder='Search your note...'/>
      <NoteList />
    </>
       
  )
}
export default NoteBrowse