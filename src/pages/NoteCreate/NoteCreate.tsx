import React from 'react'
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../../store/note/note-slice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'


interface Notes{

  title:string,
  content:string,

 
}
interface Note{
  _id:string,
  title:string,
  content:string,
  createdAt:string,
  updatedAt:string
}

const NoteCreate = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()
  const user = useSelector((store:RootState)=>store.auth.user)
  const createNote =async (formValue:Notes)=>{
    const createdNote = await  NoteApi.create({...formValue,created_at:new Date().toLocaleDateString()},user.userId)
    console.log(createdNote)
    const notes:Note={
        _id:createdNote._id,
        title:createdNote.title,
        content:createdNote.content,
        createdAt:createdNote.createdAt,
        updatedAt:createdNote.updatedAt
    }
    disptach(addNote(notes))
    alert("Note créé")
    navigate("/")
  }
  return (
    <NoteForm isEditable={true} title='Create a note' onSubmit={createNote}/>
  )
}

export default NoteCreate