import mongoose from "mongoose";
import {v4 as uuid} from "uuid"
const Note = {
    _id:uuid(),
    title:{
        type:string,
        required:true
    },
    content:{
        type:string,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }



}
const UserSchema = mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        notes:[Note]
    },
    {timestamps:true}
)

export const User = mongoose.model("User",UserSchema)