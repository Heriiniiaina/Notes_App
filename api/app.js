import express from "express"
import { config} from "dotenv"
import errorMiddleware from "./middlewares/errorHandler.js"
import { connectToDb } from "./config/db.js"
const app = express()

config()

connectToDb()
app.use(errorMiddleware)
export default app