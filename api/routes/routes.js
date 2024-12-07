import {Router}from "express";
import authRoute from "./auth.routes.js"
const BASE_URl = "/memorise"
const router = Router()

router.use(`${BASE_URl}/auth`,authRoute)

export default router