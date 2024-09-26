import React,{useContext, useState} from 'react'
import context from './context/context'
import "../style/styles.css"
import { ADD_NOTE } from './action.type'

export default function Form() {
    const {todos,dispatch} = useContext(context)
    const [note,setNote] = useState("")
    const handleClick = (e)=>{
        e.preventDefault()
        console.log(note)
        dispatch({
            type: ADD_NOTE,
            payload: note
        })
        setNote("")
    }
  return (
    <form action="" className='text-center m-4 ' onSubmit={handleClick}>
        <input type="text" placeholder='Enter your note' className="border-2 p-4 border-white rounded text-black" onChange={e=>setNote(e.target.value)}
        value={note}/>
        <button type='submit' className='bg-cyan-600 rounded p-2'>Submit</button>
    </form>
  )
}
