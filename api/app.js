import express from "express"
import { config} from "dotenv"
import errorMiddleware from "./middlewares/errorHandler.js"
const app = express()

config()


app.use(errorMiddleware)
export default app