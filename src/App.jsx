import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <NavBar >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
