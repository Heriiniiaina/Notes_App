import express from "express";
import { login, register, sendResetPasswordCode } from "../controllers/auth.controller.js";

const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.patch("/sendResetPasswordCode",sendResetPasswordCode)
export default router