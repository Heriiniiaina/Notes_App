import { config } from "dotenv"
import jwt from "jsonwebtoken"
config()
export const generateToken = (user)=>{
    const userData = {
        userId:user._id,
        fullName:user.fullName,
        email:user.email,
    } 
    const token = jwt.sign(userData,process.env.JWT_KEY)
    return token
} 