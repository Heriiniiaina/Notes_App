import Joi from "joi";

export const registerSchema = Joi.object({
    email:Joi.string().email().messages({
        "string.email":"Veuillez entrée un email valide",
        "string.empty":"Veuillez entrée un email"
    }),
    password:Joi.string().min(6).messages({
        "string.empty":"Veuillez entrée le mot de passe",
        "string.min":"Le mot de passe doit au moins contenir 6 caractères"
    }),
    fullName:Joi.string().min(4).messages({
        "string.empty":"Veuillez entrée votre nom",
        "string.min":"Le nom doit contenir au moins 4 caractères"
    })
})

export const noteSchema = Joi.object({
    title:Joi.string().min(3).required().messages({
        "string.empty":"Veuillez ajouter un titre",
        "string.min":"Le doit au moins contenir 3 caractères"
    }),
    content:Joi.string().min(5).required().messages({
          "string.empty":"Veuillez ajouter un contenu",
        "string.min":"Le contenu doit au moins contenir 4 caractères"
    })
})