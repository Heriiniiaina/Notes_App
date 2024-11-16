import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { updateNote } from '../../store/note/note-slice'

interface FORMVALUE{
  
  title:string,
  content:string,
  
}
interface Note {
  id:string,
  title:string,
  content:string,
  created_at:string
}

const Note = () => {
  const dispatch = useDispatch()
  const [isEditable,setISEditable] = useState(false)
  const {id} = useParams()
  const note:Note = useSelector((store:RootState)=>store.NOTE.noteList.find(note=>note.id === id)) as Note
  console.log("**",note)
  async function submit(formValue:FORMVALUE){
     const updatedNote = await NoteApi.update({...formValue,created_at:note.created_at,id})
      dispatch(updateNote(updatedNote))
      setISEditable(false)
  }
  console.log(note)
  return (
    <>
        {note && <NoteForm note={note} isEditable={isEditable} title={isEditable ? "Edit note" : note.title} onClickEdit={()=>setISEditable(!isEditable)} onClickTrash={()=>""} onSubmit={isEditable  ?  submit : undefined}/>}
    </>
  )
}
export default Note