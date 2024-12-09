import { ErrorHandler, errorMiddleware } from "../middlewares/errorHandler.js"
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

export const deleteNote = async (req,res,next)=>{
    const noteId = req.params.noteId
    const {userId} = req.body
    if(!noteId)
        return next(new ErrorHandler("Auccun note",404))
    if(!userId)
        return next(new ErrorHandler("erreur userId",400))
    try {
        const user= await User.findById(userId)
        if(!user)
            return next(new ErrorHandler("Auccun user",404))
        const deletedNote = user.notes.filter((note)=>note._id != noteId)
        user.notes = deletedNote
        await user.save()
        console.log(deletedNote)
        res.status(200).json({
            success:true,
            message:"Note supprimer",
            user
        })
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}