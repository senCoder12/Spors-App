import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connection from "./Configs/db.js";
import userRouter from './Routers/userRouter.js';
import eventRouter from './Routers/eventRouter.js';
dotenv.config();
const PORT = 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));
app.use(cors())

app.use("/user",userRouter);
app.use("/event",eventRouter);

app.listen(PORT, ()=> {
    connection();
    console.log('listening on port '+PORT);
})