import axios from "axios"



const BASE_URL = "https://notes-app-vxt5.onrender.com/api/note"
interface Notes{
    _id?:string
    title:string,
    content:string,
    created_at:string
}
export class NoteApi{

    
    static async create(note:Notes,userId:string){
        try {
            
             
            return (await axios.patch(`${BASE_URL}/addNote`,{title:note.title,content:note.content,userId})).data.note
        } catch (error) {
            console.log(error)
        }
    }
    static async fetchAll(userId:string){
       
        return (await axios.get(`${BASE_URL}/get-user-note/${userId}`)).data
    }
    static async fetchById(noteId:string){
        return (await axios.get(`${BASE_URL}/${noteId}`)).data
    }
    static async deleteById(noteId:string,userId:string){
        return (await axios.patch(`${BASE_URL}/deleteNote/${noteId}`,{userId})).data
    }
    static async update(note:Notes,userId:string){
        return (await axios.patch(`${BASE_URL}/updateNote/${note._id}`,{title:note.title,content:note.content,userId})).data.note
    }
}
