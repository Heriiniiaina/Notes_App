import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`App runing on PORT: ${process.env.PORT}`)
})