import express from "express"
import { addNewNote, getAllUSerNote } from "../controllers/notes.controller.js"

const router = express.Router()

router.patch("/addNote",addNewNote)
router.get("/get-user-note",getAllUSerNote)
export default router