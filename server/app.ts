require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import usertRouter from "./routes/user.routes";

//body parser
app.use(express.json({limit: "50mb"}));

// cookie parser
app.use(cookieParser());

// cors => cors origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}))

//routes
app.use("/api/v1", usertRouter)

//testing api
app.get("/test", (req:Request, res:Response, next:NextFunction)=>{
res.status(200).json({
    success: true,
    message:"API is working",
});
});

app.get("/{*splat}", (req:Request, res:Response, next:NextFunction)=>{
 const err = new Error(`Route ${req.originalUrl} not found`) as any;
 err.statusCode = 404;
 next(err);
})

app.use(ErrorMiddleware);