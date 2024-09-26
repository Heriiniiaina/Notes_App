
import React ,{ useState ,useEffect}from 'react'
interface TodoFormProps{
  addNote:(todo:string)=>void
}
const Forms: React.FC<TodoFormProps> = ({addNote})=> {
  
   const [note,setNote] = useState<string>("")
  const AddNote = (e:React.FormEvent)=>{
    e.preventDefault()
    if(!note) return 
    addNote(note)
    setNote("")
  }
    
  return (
    <div>
        <form action="" onSubmit={AddNote}>
            <input type="text" placeholder='Enter your note'  onChange={e=>setNote(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
export default Forms
