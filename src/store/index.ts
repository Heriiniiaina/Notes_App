import { configureStore, Store } from "@reduxjs/toolkit";  
import { noteReducer } from "./note/note-slice";
import {authReducer} from "./note/auth-slice"

export const store = configureStore({
    reducer:{
        NOTE:noteReducer,
        auth:authReducer
    }
})

export type RootState = ReturnType< typeof store.getState>