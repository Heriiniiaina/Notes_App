import axios from "axios"

const BASE_URL = "http://localhost:3000/notes"
interface Notes{
    id:string
    title:string,
    content:string,
    created_at:string
}
export class NoteApi{
    static async create(note:Notes){
        return (await axios.post(`${BASE_URL}`,note)).data
    }
    static async fetchAll(){
        return (await axios.get(`${BASE_URL}`)).data
    }
    static async fetchById(noteId:number){
        return (await axios.get(`${BASE_URL}/${noteId}`)).data
    }
    static async deleteById(noteId:number){
        return (await axios.delete(`${BASE_URL}/${noteId}`)).data
    }
    static async update(note:Notes){
        return (await axios.post(`${BASE_URL}/${note.id}`,note)).data
    }
}