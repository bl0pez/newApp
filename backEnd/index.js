import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './config/connectDB.js';

const app = express();
dotenv.config();

connectMongoDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
});