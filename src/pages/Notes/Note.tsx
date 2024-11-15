import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import NoteForm from '../../components/NoteForm/NoteForm'



const Note = () => {
  const [isEditable,setISEditable] = useState(false)
  const {id} = useParams()
  const note = useSelector((store:RootState)=>store.NOTE.noteList.find(note=>note.id === id))
  
  console.log(note)
  return (
    <>
        {note && <NoteForm note={note} isEditable={isEditable} title={isEditable ? "Edit note" : note.title} onClickEdit={()=>setISEditable(!isEditable)} onClickTrash={()=>""}/>}
    </>
  )
}
export default Note