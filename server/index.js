import express  from "express";
import dotenv from 'dotenv'
import connectDB from "./config/dbConnection.js";
import formRouter from "./routes/formRouter.js"
import userRouter from "./routes/userRouter.js"
import blogRouter from "./routes/blogRouter.js"
import morgan from "morgan";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))


app.use("/api/v1", formRouter)
app.use("/api/v1", userRouter)
app.use("/api/v1", blogRouter)

const Port= process.env.PORT || 8080;
app.listen(Port,()=>{
    console.log(`Server is listening on Port ${Port}`)
})