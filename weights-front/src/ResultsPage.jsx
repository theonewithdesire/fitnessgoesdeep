import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage({ results }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Results:', results);
    if (!results) {
      navigate('/');
    }
  }, [results, navigate]);

  if (!results) {
    return null;
  }

  const { maintenanceCalories, resultCalories } = results;
  const surplusCalories = Math.round(maintenanceCalories + 500);
  const deficitCalories = Math.round(maintenanceCalories - 500);

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center p-4">
      <div className="bg-dark-blue shadow-lg rounded-lg p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Calorie Results</h1>
        <p className="text-sm text-gray-400 text-center mb-4">
          Your personalized calorie results
        </p>
        <div className="space-y-2">
          <div className="bg-navy p-4 rounded-md">
            <h2 className="text-lg font-bold">Maintenance Calories</h2>
            <p>{Math.round(maintenanceCalories)} kcal/day</p>
          </div>
          <div className="bg-navy p-4 rounded-md">
            <h2 className="text-lg font-bold">Surplus Calories</h2>
            <p>{surplusCalories} kcal/day</p>
          </div>
          <div className="bg-navy p-4 rounded-md">
            <h2 className="text-lg font-bold">Deficit Calories</h2>
            <p>{deficitCalories} kcal/day</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Back to Form
        </button>
        {/* Removed the raw JSON results display */}
      </div>
    </div>
  );
}

export default ResultsPage;