import axios from "axios"

const BASE_URL = "http://localhost:3000/notes"
interface Notes{
    id?:string
    title:string,
    content:string,
    created_at:string
}
export class NoteApi{
    private static async generateNextId(): Promise<number> {
        
        const notes = (await axios.get(BASE_URL)).data;
        
        return notes.length + 1;
    }
    
    static async create(note:Notes){
        try {
            const id = await this.generateNextId()  
            console.log(id)  
            return (await axios.post(`${BASE_URL}`,note)).data
        } catch (error) {
            console.log(error)
        }
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
        return (await axios.patch(`${BASE_URL}/${note.id}`,note)).data
    }
}