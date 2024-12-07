import express from "express"
import { config} from "dotenv"
import errorMiddleware from "./middlewares/errorHandler.js"
import { connectToDb } from "./config/db.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/auth.routes.js"
const app = express()

config()

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())
app.use(routes)

app.use(errorMiddleware)
export default app