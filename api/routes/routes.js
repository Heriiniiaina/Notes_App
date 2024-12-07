import express from "express";
import authRoute from "./auth.routes.js"
const BASE_URl = "/memorise"
const router = express.Router()

const baseUrl = "/api"
router.use(`${baseUrl}/auth`,authRoute)

export default router