import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoalPage({ setGoal }) {
  const navigate = useNavigate();

  const handleGoalSelection = (goal) => {
    setGoal(goal);
    navigate('/form');
  };

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center p-4">
      <div className="bg-dark-blue shadow-lg rounded-lg p-8 w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-bold">What is your goal?</h1>
        <button
          onClick={() => handleGoalSelection('gain')}
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        >
          To gain some good weight
        </button>
        <button
          onClick={() => handleGoalSelection('lose')}
          className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          To lose some body fat
        </button>
      </div>
    </div>
  );
}

export default GoalPage;
