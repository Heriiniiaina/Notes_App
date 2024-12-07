import mongoose from "mongoose"
import { ErrorHandler } from "../middlewares/errorHandler.js"

export const connectToDb = ()=>{
    try {
        
    } catch (error) {
        return new ErrorHandler(error.message)
    }
}