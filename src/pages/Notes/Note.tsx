import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import NoteForm from '../../components/NoteForm/NoteForm'
import { NoteApi } from '../../api/note-api'
import { deleteNote, updateNote } from '../../store/note/note-slice'

interface FORMVALUE{
  
  title:string,
  content:string,
  
}
interface Note {
  _id:string,
  title:string,
  content:string,
  createdAt:string
}

const Note = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isEditable,setISEditable] = useState(false)
  const {id} = useParams()
  const note = useSelector((store:RootState)=>store.NOTE.noteList.find(note=>note._id === id)) 
  const user  = useSelector((store:RootState)=>store.auth.user)
  
  console.log("**",note)
  async function submit(formValue:FORMVALUE){
    const userId = user != null ? user.userId : ""
     const updatedNote = await NoteApi.update({...formValue,_id:note?._id,created_at:Date.now().toString()},userId)
     console.log(updatedNote)
     dispatch(updateNote(updatedNote))
     setISEditable(false)
  }
  const deleteSelectedNote = (note: Note) => {
    const userId = user != null ? user.userId : ""
    console.log("** "+ userId)
    if (window.confirm("Supprimer la note ?")) {
      NoteApi.deleteById(note._id,userId)
      dispatch(deleteNote(note))
      navigate("/")
    }

  }
  return (
    <>
        {note && <NoteForm isLoading = {false} note={note} isEditable={isEditable} title={isEditable ? "Edit note" : note.title} onClickEdit={()=>setISEditable(!isEditable)} onClickTrash={()=>deleteSelectedNote(note)} onSubmit={isEditable  ?  submit : undefined}/>}
    </>
  )
}
export default Note