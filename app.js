import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config({path : "./config/config.env"});

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

export default app;