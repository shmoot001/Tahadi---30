import React from 'react';
import jarasImage from './jaras.png';

export default function Jaras() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
      <img src={jarasImage} alt="Jaras Image" className="w-80 h-auto mb-8" /> {/* Adjust styling as needed */}
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

