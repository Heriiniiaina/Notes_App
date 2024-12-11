import mongoose from "mongoose"
import { ErrorHandler } from "../middlewares/errorHandler.js"

export const connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
       console.log(error)
    }
}