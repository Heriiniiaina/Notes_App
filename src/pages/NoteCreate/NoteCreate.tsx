
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../../store/note/note-slice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { useState } from 'react'


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
  const [isLoading,setIsLoading] = useState(false)
  const user = useSelector((store:RootState)=>store.auth.user)
  const createNote =async (formValue:Notes)=>{
    setIsLoading(true)
   try {
    const userId = user != null ? user.userId : ""
    const createdNote = await  NoteApi.create({...formValue,created_at:new Date().toLocaleDateString()},userId)
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
   } catch (error) {
      console.log(error)
   }finally {
    setIsLoading(false)
   }
 
  }
  return (
    <NoteForm isLoading={isLoading} isEditable={true} title='Créér une note' onSubmit={createNote}/>
  )
}

export default NoteCreate