import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { useDispatch } from "react-redux"
import { NoteApi } from "./api/note-api"
import { setNoteList } from "./store/note/note-slice"
import { useEffect } from "react"

function App() {
  const disptach = useDispatch()
  const fetchAll = async ()=>{
    const noteList = await NoteApi.fetchAll()
    disptach(setNoteList(noteList))
  }
  useEffect(()=>{
    fetchAll()
  },[])

  return (
    <div className="max-w-full bg-gray-100 ">
      <Header/>
      <div className="p-[50px]">

        <Outlet/>
      </div>
    </div>
  )
}

export default App
