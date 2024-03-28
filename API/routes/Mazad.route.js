import express from 'express';

import {getAllQuestions,getRandomQuestionByDifficulty, createQuestion } from '../controllers/Mazad.controller.js'


const MazadRouter = express.Router();

MazadRouter.get('/getAllQuestions', getAllQuestions);
MazadRouter.post('/createQuestion', createQuestion);
MazadRouter.get('/difficulty/:difficulty', getRandomQuestionByDifficulty);

export default MazadRouter;