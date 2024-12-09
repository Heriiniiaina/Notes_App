import { ErrorHandler } from "../middlewares/errorHandler.js"
import { noteSchema } from "../middlewares/validator.js"
import { User } from "../models/user.model.js"

export const addNewNote = async (req,res,next)=>{
        const {title,content,userId} = req.body
        if(!title || !content || !userId) return next(new ErrorHandler("Veuillez remplir le formulaire",400))
        try {
            const {error} = noteSchema.validate({title,content})
            if(error)
                return next(new ErrorHandler(error.details[0].message,400))
                const user = await User.findById(userId)
                if(!user)
                    return next(new ErrorHandler("User not found",404))
                const newNote = {
                    title,
                    content,
                    createdAt:Date.now(),
                    updatedAt:Date.now()
                }
                user.notes.push(newNote)
                await user.save()
                
               
                const addedNote = user.notes[user.notes.length - 1];
                console.log(addedNote)
                res.status(201).json({
                    success:true,
                    message:"Note crée avec succées",
                    note:addedNote
                })
        } catch (error) {
            next(new ErrorHandler(error.message))
        }
}

export const getAllUSerNote = async (req,res,next)=>{
    const userId = req.params.userId
    if(!userId)
        return next(new ErrorHandler("Autorisation error",403))
    try {
        const user = await User.findById(userId)
        if(!user)
            return next(new ErrorHandler("User not found",404))
        return res.status(200).json({
            notes:user.notes
        })
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}