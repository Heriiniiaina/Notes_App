
import { createSlice } from "@reduxjs/toolkit";

interface Note {
    id:string,
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
        },
        updateNote:(currentSlice,action)=>{
            const index = currentSlice.noteList.findIndex((note)=>note.id === action.payload.id)
            currentSlice.noteList[index] = action.payload
        }
    }
})
export const noteReducer = noteSlice.reducer
export const {setNoteList,addNote} = noteSlice.actions