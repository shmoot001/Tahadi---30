import React, { useState } from 'react';

export default function MazaTaraf() {
  const [randomQuestion, setRandomQuestion] = useState('');

  const getQuestionByDifficulty = async (difficulty) => {
    try {
      const response = await fetch(`/api/mazataref/difficulty/${difficulty}`);
      const responseData = await response.json();
      console.log(responseData);
      setRandomQuestion(responseData.questionText);
    } catch (error) {
      console.error('Det uppstod ett fel:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl">{randomQuestion}</h1>
      </div>
      <div className="flex">
        <button className="bg-green-500 text-white py-8 px-14 rounded-lg shadow-md hover:bg-green-600 mr-4" onClick={() => getQuestionByDifficulty('easy')}>
          <span>Lätt</span>
        </button>
        <button className="bg-yellow-500 text-white py-8 px-14 rounded-lg shadow-md hover:bg-yellow-600" onClick={() => getQuestionByDifficulty('medium')}>
          <span>Medium</span>
        </button>
        <button className="bg-red-500 text-white py-8 px-14 rounded-lg shadow-md hover:bg-red-600 ml-4" onClick={() => getQuestionByDifficulty('hard')}>
          <span>Svår</span>
        </button>
      </div>
    </div>
  );
}