import {app} from "./app";
import connectDB from "./utils/db";
import{v2 as cloudinary} from "cloudinary";
require("dotenv").config();

console.log( process.env.CLOUD_NAME);
console.log(process.env.CLOUD_API_KEY);
console.log(process.env.CLOUD_SECRET_KEY);


//cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
})

console.log("Cloudinary API secret:", !!cloudinary.config().api_secret);

// creating server
app.listen(8000, ()=>{
    console.log(`Server is connected with port 8000`)
    console.log(`Server is running on http://localhost:8000`)
    connectDB();
});