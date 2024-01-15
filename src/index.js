
import connectDB from "./db/index.js";
import {app} from "./app.js"
import dotenv from "dotenv"
dotenv.config({path: './env'})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at PORT : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection failed !!! error",err)
});