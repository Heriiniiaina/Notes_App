import React from 'react'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import NoteForm from '../../components/NoteForm/NoteForm'



const Note = () => {
  const {id} = useParams()
  const note = useSelector((store:RootState)=>store.NOTE.noteList.find(note=>note.id === id))
  console.log(note)
  return (
    <>
        {note && <NoteForm title={note.title} onClickEdit={()=>""} onClickTrash={()=>""}/>}
    </>
  )
}
export default Note