import {app} from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

// creating server
app.listen(8000, ()=>{
    console.log(`Server is connected with port 8000`)
    console.log(`Server is running on http://localhost:8000`)
    connectDB();
});