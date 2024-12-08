import { ErrorHandler } from "../middlewares/errorHandler"

export const addNewNote = async (req,res,next)=>{
        const {title,content} = req.body
        if(!title || !content) return next(new ErrorHandler("Veuillez remplir le formulaire",400))
        try {
            
        } catch (error) {
            
        }
}