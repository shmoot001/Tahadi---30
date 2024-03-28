import MazadQuestions from "../models/Mazad.model.js";

export const getAllQuestions = async (req, res) => {
    try {
      const questions = await MazadQuestions.find();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const createQuestion = async (req, res) => {
    const question = new MazadQuestions({
      questionText: req.body.questionText,
      level: req.body.level
    });
  
    try {
      const newQuestion = await question.save();
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  export const getRandomQuestionByDifficulty = async (req, res) => {
    const { difficulty } = req.params;
    try {
      const questions = await MazadQuestions.find({ level: difficulty });
      const count = questions.length;
      if (count === 0) {
        return res.status(404).json({ message: `Inga frågor hittades för svårighetsnivån ${difficulty}` });
      }
      const randomIndex = Math.floor(Math.random() * count);
      const randomQuestion = questions[randomIndex];
      res.json(randomQuestion);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };