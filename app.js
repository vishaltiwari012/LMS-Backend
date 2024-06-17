import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config({path : "./config/config.env"});

app.use(express.json());
export default app;