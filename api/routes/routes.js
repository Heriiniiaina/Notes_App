import express from "express";
import authRoute from "./auth.routes.js"
import noteRoute from "./note.routes.js"
const BASE_URl = "/memorise"
const router = express.Router()

const baseUrl = "/api"
router.use(`${baseUrl}/auth`,authRoute)
router.use(`${baseUrl}/note`,noteRoute)
export default router