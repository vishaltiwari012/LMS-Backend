import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { connectDB } from './database/dbConnection.js';
import { errorMiddleWare } from './middlewares/error.js';

const app = express();
dotenv.config({path : "./config/config.env"});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}))




connectDB();
app.use(errorMiddleWare);
export default app;