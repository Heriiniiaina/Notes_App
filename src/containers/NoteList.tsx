import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import TextCard from '../components/TextCard/TextCard'
import { useNavigate } from 'react-router-dom'
import { NoteApi } from '../api/note-api'
import { deleteNote } from '../store/note/note-slice'
interface Note {
  _id: string,
  title: string,
  content: string,
  createdAt: string,
  updatedAt:string
}
interface Props{
  noteList:Note[]
}


const NoteList = ({noteList}:Props) => {
  const dispatch = useDispatch()
  const naviagte = useNavigate()
  const user = useSelector((store:RootState)=>store.auth.user)
  const userId = user !=null ? user.userId : "" 
  
  const deleteSelectedNote = (note: Note) => {
    if (window.confirm("Supprimer la note ?")) {
      NoteApi.deleteById(note._id,userId)
      dispatch(deleteNote(note))

    }

  }
  return (
    <div className='flex justify-center flex-row w-full flex-wrap'>
      {
        noteList.map((note) => {
          return <div key={note._id} className='m-4 '>
            <TextCard title={note.title} subtitle={note.createdAt} content={note.content}
              onClick={() => naviagte("/note/" + note._id)} onClickTrash={() => deleteSelectedNote(note)} />
          </div>
        })
      }
    </div>
  )
}

export default NoteList