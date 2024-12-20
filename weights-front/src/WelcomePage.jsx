import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center p-4">
      <div className="bg-dark-blue shadow-lg rounded-lg p-8 w-full max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold">FitnessGoesDeep</h1>
        <p className="text-sm text-gray-400 mb-4">
          We help you get in shape you always wanted the easiest way possible!
        </p>
        <button
          onClick={() => navigate('/goal')}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Let's Go Deep
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
