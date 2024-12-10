import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"
import { User } from "../models/user.model.js"
import { comparePassword, hashPassword } from "../utils/bcrypt.js"
import { generateToken } from "../utils/token.js"

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

export const login = async(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password)
        return next(new ErrorHandler("Veuillez remplire le formulaire",400))
    try {
        const user = await User.findOne({email:email}).select("+password")
        if(!user)
            return next(new ErrorHandler("Aucun utilisateur avec cet email",404))
        const isPass = await comparePassword(password,user.password)
        if(!isPass)
            return next(new ErrorHandler("Mot de passe incorrecte"))
        const token = generateToken(user)
        console.log("pkau")
        res.cookie("Authorization",token,{expires:new Date(Date.now() + 8 * 3600000),secure:process.env.NODE_ENV=="production",httpOnly:process.env.NODE_ENV} ).json({
            success:true,
            message:"Connexion reussi",
            token,
            user:{
                fullName:user.fullName,
                email:user.email,
                userId:user._id
            }
        
        })
    } catch (error) {
        console.log(error)
        next(new ErrorHandler(error.message))
    }
}

export const sendResetPasswordCode = async (req,res,next)=>{
    const {email} = req.body
    if(!email)
        return next(new ErrorHandler("Veuillez entrer votre email",400))
    try {
        
    } catch (error) {
        
    }
}