import express from "express"
import { addNewNote } from "../controllers/notes.controller.js"

const router = express.Router()

router.patch("/addNote",addNewNote)

export default router