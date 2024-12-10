import { config } from "dotenv";
import nodemailer from "nodemailer"
config()

export const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_SEND,
        pass:process.env.EMAIL_PASS,
    }
})
