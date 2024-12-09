import axios from "axios"
import { useSelector } from "react-redux";
import { RootState } from "../store";

const BASE_URL = "http://localhost:8000/api/note"
interface Notes{
    _id?:string
    title:string,
    content:string,
    created_at:string
}
export class NoteApi{
    private static async generateNextId(): Promise<number> {
        
        const notes = (await axios.get(BASE_URL)).data;
        
        return notes.length + 1;
    }
    
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
    static async update(note:Notes){
        return (await axios.patch(`${BASE_URL}/${note._id}`,note)).data
    }
}