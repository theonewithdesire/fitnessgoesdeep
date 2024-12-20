import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx';
import GoalPage from './GoalPage.jsx';
import FormPage from './FormPage.jsx';
import ResultsPage from './ResultsPage.jsx';

function App() {
  const [results, setResults] = useState(null);
  const [goal, setGoal] = useState('');

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/goal" element={<GoalPage setGoal={setGoal} />} />
      <Route path="/form" element={<FormPage setResults={setResults} goal={goal} />} />
      <Route path="/results" element={<ResultsPage results={results} goal={goal} />} />
    </Routes>
  );
}

export default App;