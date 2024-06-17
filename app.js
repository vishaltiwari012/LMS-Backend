import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './database/dbConnection.js';

const app = express();
dotenv.config({path : "./config/config.env"});

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

connectDB();
export default app;