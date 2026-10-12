import mongoose from "mongoose";
import { connect } from "node:http2";
require ('dotenv').config();

const dbUrl = process.env.DB_URL || '';

const connectDB = async () =>{
    try {
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Database connected with ${data.connection.host}`)
        })
    } catch (error:any) {
        console.log(error.message);
        setTimeout(connectDB, 10000);
    }
}

export default connectDB;