import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"
import { User } from "../models/user.model.js"
import { hashPassword } from "../utils/bcrypt.js"

export const register = async(req,res,next)=>{
    const {fullName,email,password}= req.body
    if(!fullName || !email || !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const {error} = registerSchema.validate({fullName,email,password})
        if(error)
            return next(new ErrorHandler(error.details[0].message))
        const isUserExist = await User.findOne({email:email})
        if(isUserExist)
            return next(new ErrorHandler("Email déja utilisé par un autre compte",400))
        console.log(isUserExist)
        const hashedPassword = await hashPassword(password)
        const user= new User({
            fullName,
            email,
            password:hashedPassword
        })
        await user.save()
        res.status(201).json({
            success:true,
            message:"Compte créé avec succées"
        })
    } catch (error) {
        console.log(error)
        next(new ErrorHandler(error.message))
    }
}