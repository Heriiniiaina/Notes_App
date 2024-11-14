import { configureStore, Store } from "@reduxjs/toolkit";  
import { noteReducer } from "./note/note-slice";


export const store = configureStore({
    reducer:{
        NOTE:noteReducer
    }
})

export type RootState = ReturnType< typeof store.getState>