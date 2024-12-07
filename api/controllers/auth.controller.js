import { ErrorHandler } from "../middlewares/errorHandler.js"
import { User } from "../models/user.model.js"

export const register = async(req,res,next)=>{
    const {fullName,email,password}= req.body
    if(!fullName || !email || !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const isUserExist = await User.findOne({email:email})
        if(isUserExist)
            return next(new ErrorHandler("Email déja utilisé par un autre compte",400))

    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}