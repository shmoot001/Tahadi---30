import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MazatarefRouter from './routes/Mazataref.route.js';
import MazadRouter from './routes/Mazad.route.js';
import path from 'path';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connect to datebase!");
    }).catch((err)=>{
        console.log(err);
    });

const __dirname = path.resolve();
const app = express();
app.use(express.json());

app.use('/api/mazataref/', MazatarefRouter);
app.use('/api/mazad/', MazadRouter);

app.use(express.static(path.join(__dirname, '/app/dist')));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'app', 'dist', 'index'));
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});