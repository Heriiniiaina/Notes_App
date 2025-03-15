import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { NoteApi } from "./api/note-api"
import { setNoteList } from "./store/note/note-slice"
import { useEffect } from "react"
import { RootState } from "./store"

/*ok*/
function App() {
  const disptach = useDispatch()
  const userId = useSelector((store:RootState)=>store.auth.user?.userId)
  const id = userId ? userId : ""
  const fetchAll = async ()=>{

      const noteList = await NoteApi.fetchAll(id)
      console.log(noteList)
    disptach(setNoteList(noteList.notes))
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
