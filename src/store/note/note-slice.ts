
import { createSlice } from "@reduxjs/toolkit";

interface Note {
    id:number,
    title:string,
    content:string,
    created_at:string
}

interface NoteState{
    noteList:Note[]
}

const initialState:NoteState = {
    noteList:[]
}

export const noteSlice = createSlice({
    name:"noteSlice",
    initialState,
    reducers:{
        setNoteList:(currentSlice,action)=>{
            currentSlice.noteList = action.payload
        },
        addNote:(currentSlice,action)=>{
            currentSlice.noteList.push(action.payload)
        }
    }
})
export const noteReducer = noteSlice.reducer
export const {setNoteList,addNote} = noteSlice.actions