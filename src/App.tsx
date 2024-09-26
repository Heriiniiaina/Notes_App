
import { useEffect, useState } from "react"
import Forms from "./Components/Form.js"
import './index.css'
import {Face,Add,Remove,RemoveCircle} from "@mui/icons-material"
function App() {

  let [notes,setNotes] = useState<string[]>(()=>{
    const saveTodos = localStorage.getItem("todo")
    return saveTodos ? JSON.parse(saveTodos) : []
  })
  useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(notes))
  },[notes])
  const addNote = (todo:string)=>{
    setNotes([...notes,todo])
  }
  const removeNote = (index:number)=>{
    const notescopy = notes.filter((n,i) => i !=index)
    setNotes(notescopy)
  }
  return (
    <>
      <div>
          <h1>TodoApp</h1>
          <Forms addNote={addNote}/>
          <div className="notes">
             {
              notes?.map((note,index)=>(
                <div key={index} className="note">
                  <div className="note-item">
                  {note }
                  </div>
                   
                   <button className="removeBtn" onClick={()=>removeNote(index)}>
                      X
                   </button>
                   
                </div>
                
              ))
             }
          </div>
      </div>
    </>
  )
}

export default App
