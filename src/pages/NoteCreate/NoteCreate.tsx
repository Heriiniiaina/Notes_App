import React from 'react'
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/note/note-slice'

interface Notes{
 
  title:string,
  content:string,
 
}

const NoteCreate = () => {
  const disptach = useDispatch()
  const createNote =async (formValue:Notes)=>{
    const createdNote = await  NoteApi.create({...formValue,created_at:new Date().toLocaleDateString()})
    disptach(addNote(createdNote))
    console.log(createdNote)
  }
  return (
    <NoteForm title='Create a note' onSubmit={createNote}/>
  )
}

export default NoteCreate