import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongodb connected !!! db host ${connectionInstance.connection.host} ${DB_NAME}`)
    } catch (error) {
        console.log("mongodb connection error", error)
        process.exit(1);
    }
}
export default connectDB ;