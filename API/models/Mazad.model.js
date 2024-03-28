import mongoose from "mongoose";

const MazadQuestionsSchema = new mongoose.Schema({
    questionText:{
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
    }
});

const MazadQuestions = mongoose.model('MazadQuestions', MazadQuestionsSchema);

export default MazadQuestions;