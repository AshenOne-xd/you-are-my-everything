import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Flowers from './components/Flowers';
import Question from './components/Question';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Question/>}/>
        <Route path="/flowers" element={<Flowers />} />
      </Routes>
    </div>
  );
}

export default App; 