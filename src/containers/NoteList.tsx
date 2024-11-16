import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import TextCard from '../components/TextCard/TextCard'
import { useNavigate } from 'react-router-dom'
import { NoteApi } from '../api/note-api'
import { deleteNote } from '../store/note/note-slice'
interface Note {
  id: string,
  title: string,
  content: string,
  created_at: string
}


const NoteList = () => {
  const dispatch = useDispatch()
  const naviagte = useNavigate()

  const noteList = useSelector((store: RootState) => store.NOTE.noteList)
  const deleteSelectedNote = (note: Note) => {
    if(window.confirm("Supprimer la note ?")){
      NoteApi.deleteById(note.id)
      dispatch(deleteNote(note))

    }

  }
  return (
    <div className='flex justify-center flex-row w-full flex-wrap'>
      {
        noteList.map((note) => {
          return <div key={note.id} className='m-4 '>
            <TextCard title={note.title} subtitle={note.created_at} content={note.content}
              onClick={() => naviagte("/note/" + note.id)} onClickTrash={() => deleteSelectedNote(note)} />
          </div>
        })
      }
    </div>
  )
}

export default NoteList