import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MazatarefRouter from './routes/Mazataref.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connect to datebase!");
    }).catch((err)=>{
        console.log(err);
    });
const app = express();
app.use(express.json());

app.use('/api/mazataref/', MazatarefRouter);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});