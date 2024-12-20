import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './FormPage.jsx';
import ResultsPage from './ResultsPage.jsx';

function App() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    console.log('Results State:', results);
  }, [results]);

  return (
    <Routes>
      <Route path="/" element={<FormPage setResults={setResults} />} />
      <Route path="/results" element={<ResultsPage results={results} />} />
    </Routes>
  );
}

export default App;