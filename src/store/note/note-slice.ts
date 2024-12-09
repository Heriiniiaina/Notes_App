
import { createSlice } from "@reduxjs/toolkit";

interface Note {
    _id:string,
    title:string,
    content:string,
    createdAt:string,
    updatedAt:string
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
            const index = currentSlice.noteList.findIndex((note)=>note._id === action.payload._id)
            currentSlice.noteList[index] = action.payload
        },
        deleteNote:(currentSlice,action)=>{
            const filteredNote = currentSlice.noteList.filter(note=>note._id !== action.payload._id)
            currentSlice.noteList = filteredNote
        }
    }
})
export const noteReducer = noteSlice.reducer
export const {setNoteList,addNote,updateNote,deleteNote} = noteSlice.actions