import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import TextCard from '../components/TextCard/TextCard'
import {  useNavigate } from 'react-router-dom'



const NoteList = () => {
  const naviagte =useNavigate()
    const noteList = useSelector((store:RootState)=>store.NOTE.noteList)
  return (
    <div className='flex justify-center flex-row w-full flex-wrap'>
        {
            noteList.map((note)=>{
                return <div key={note.id} className='m-4 '>
                    <TextCard title={note.title} subtitle={note.created_at} content={note.content}
                     onClick={()=>naviagte("/note/"+note.id) } onClickTrash={()=> alert("del")}/>
                </div>
            })
        }
    </div>
  )
}

export default NoteList