import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import NoteForm from '../../components/NoteForm/NoteForm'

interface FORMVALUE{
  id:string,
  title:string,
  content:string,
  created_at:string
}

const Note = () => {
  const [isEditable,setISEditable] = useState(false)
  const {id} = useParams()
  const note = useSelector((store:RootState)=>store.NOTE.noteList.find(note=>note.id === id))
  async function submit(formValue:object){
    
  }
  console.log(note)
  return (
    <>
        {note && <NoteForm note={note} isEditable={isEditable} title={isEditable ? "Edit note" : note.title} onClickEdit={()=>setISEditable(!isEditable)} onClickTrash={()=>""} onSubmit={isEditable  ?  submit : undefined}/>}
    </>
  )
}
export default Note