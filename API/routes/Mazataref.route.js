import express from 'express';
import { getAllQuestions,getRandomQuestionByDifficulty, createQuestion, test, deleteQuestion } from '../controllers/MazatarefController.js'

const MazatarefRouter = express.Router();


MazatarefRouter.get('/test', test);
// Route för att hämta alla frågor
MazatarefRouter.get('/getAllQuestions', getAllQuestions);

// Route för att skapa en ny fråga
MazatarefRouter.post('/createQuestion', createQuestion);

// Route för att ta bort en fråga
MazatarefRouter.delete('/deleteQuestion/:id', deleteQuestion);


MazatarefRouter.get('/difficulty/:difficulty', getRandomQuestionByDifficulty);

export default MazatarefRouter;
