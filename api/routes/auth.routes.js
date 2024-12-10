import express from "express";
import { login, register, sendResetPasswordCode, verifyResetPasswordCode } from "../controllers/auth.controller.js";

const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.patch("/sendResetPasswordCode",sendResetPasswordCode)
router.patch("/verifyResetPasswordCode",verifyResetPasswordCode)
export default router