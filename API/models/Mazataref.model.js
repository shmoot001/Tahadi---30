import mongoose from 'mongoose';

// Skapa ett schema för frågor
const MazatarefQuestionsSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  }
});

// Skapa en modell baserad på schemat
const MazatarefQuestions = mongoose.model('MazatarefQuestions', MazatarefQuestionsSchema);

export default MazatarefQuestions;