import React, { useState } from 'react';

export default function MazaTaraf() {
  const [randomQuestion, setRandomQuestion] = useState('');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionLevel, setNewQuestionLevel] = useState('easy');
  const [createSuccess, setCreateSuccess] = useState(false);

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

  const createNewQuestion = async () => {
    try {
      const response = await fetch('/api/mazataref/createQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionText: newQuestionText,
          level: newQuestionLevel,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      setNewQuestionText(''); // Töm textfältet efter att frågan har skapats
      setCreateSuccess(true); // Visa bekräftelsemeddelande
    } catch (error) {
      console.error('Det uppstod ett fel vid skapandet av frågan:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl">{randomQuestion}</h1>
      </div>
      <div className="flex mb-4">
        <button className="bg-green-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-green-600 mr-4" onClick={() => getQuestionByDifficulty('easy')}>
          <span>Lätt</span>
        </button>
        <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 mr-4" onClick={() => getQuestionByDifficulty('medium')}>
          <span>Medium</span>
        </button>
        <button className="bg-red-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-red-600" onClick={() => getQuestionByDifficulty('hard')}>
          <span>Svår</span>
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Skriv in frågetexten"
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
          className="border border-gray-500 rounded-md px-3 py-2 mr-2 text-black"
        />
        <select
          value={newQuestionLevel}
          onChange={(e) => setNewQuestionLevel(e.target.value)}
          className="border border-gray-500 rounded-md px-3 py-2 text-black"
        >
          <option value="easy">Lätt</option>
          <option value="medium">Medium</option>
          <option value="hard">Svår</option>
        </select>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2" onClick={createNewQuestion}>
          Skapa fråga
        </button>
        {createSuccess && <p className="text-green-500">Frågan har skapats!</p>} {/* Visa bekräftelsemeddelande */}
      </div>
    </div>
  );
}
