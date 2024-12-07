import mongoose from "mongoose";
import {v4 as uuid} from "uuid"
const Note = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
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

})
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
            required:true,
            select:false
        },
        notes:[Note]
    },
    {timestamps:true}
)

export const User = mongoose.model("User",UserSchema)