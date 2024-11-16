import React from 'react'
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/note/note-slice'
import { useNavigate } from 'react-router-dom'

interface Notes{
 
  title:string,
  content:string,
 
}

const NoteCreate = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()
  const createNote =async (formValue:Notes)=>{
    const createdNote = await  NoteApi.create({...formValue,created_at:new Date().toLocaleDateString()})
    disptach(addNote(createdNote))
    alert("Note créé")
    navigate("/")
  }
  return (
    <NoteForm isEditable={true} title='Create a note' onSubmit={createNote}/>
  )
}

export default NoteCreate