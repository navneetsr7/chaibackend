// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/db.config.js";

dotenv.config({
    path: './env'
})

 


connectDB()














/*
import express from "express"
const app = express


(async() => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERRROR :" ,error)
                throw err
            })
            app.listen(process.env.PORT,() =>{
                console.log(`App is listening on port ${process.env.PORT}` )
            })
    } catch (error) {
        console.error("ERROR :",error)
        throw err
    }
})()

*/