import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () =>{
    try {
      const connectionInstance =  await mongoose.connect
      (`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB Connected !! DB HOST:
        ${connectionInstance.connection.host}`)
    } catch (error) { 
        console.log( error.message || "DB connection Failed" );
        process.exit(1)
    }
}


export default connectDB