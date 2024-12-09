import express from "express"
import { addNewNote, deleteNote, getAllUSerNote, updateNote } from "../controllers/notes.controller.js"

const router = express.Router()

router.patch("/addNote",addNewNote)
router.get("/get-user-note/:userId",getAllUSerNote)
router.patch("/deleteNote/:noteId",deleteNote)
router.patch("/updateNote/:noteId",updateNote)
export default router