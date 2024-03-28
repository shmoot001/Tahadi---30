import React, { useState, useEffect } from 'react';

export default function Mazad() {
  const [randomQuestion, setRandomQuestion] = useState('');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionLevel, setNewQuestionLevel] = useState('easy');
  const [createSuccess, setCreateSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30000); // Tid i millisekunder
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    let countdown;
    if (counting) {
      countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(countdown);
            // Här kan du göra något när tiden når 0, t.ex. ladda en ny fråga
            return 30000; // Återställ tiden till 30 sekunder
          }
          return prevTime - 100;
        });
      }, 100);
    }

    return () => clearInterval(countdown);
  }, [counting]);

  const startCountdown = () => {
    setCounting(true);
  };

  const stopCountdown = () => {
    setCounting(false);
  };

  const restartCountdown = () => {
    setTimeLeft(30000); // Återställ tiden till 30 sekunder (30000 millisekunder)
    setCounting(false);
  };

  const getQuestionByDifficulty = async (difficulty) => {
    try {
      const response = await fetch(`/api/mazad/difficulty/${difficulty}`);
      const responseData = await response.json();
      console.log(responseData);
      setRandomQuestion(responseData.questionText);
    } catch (error) {
      console.error('Det uppstod ett fel:', error);
    }
  };

  const createNewQuestion = async () => {
    try {
      const response = await fetch('/api/mazad/createQuestion', {
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

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10); // Konvertera till hundradelar av en sekund
    return `${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
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
      <div className="mb-4">
        <div className="text-6xl font-bold">{formatTime(timeLeft)}</div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2" onClick={startCountdown}>
            Start
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md mr-2" onClick={stopCountdown}>
            Stop
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={restartCountdown}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
