import React from 'react';

export default function MazaTaraf() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl">MazaTaraf</h1>
      </div>
      <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600">
        <a>سؤال جديد</a>
      </button>
    </div>
  );
}
