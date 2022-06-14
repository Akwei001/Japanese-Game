import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Hirigana from './Hirigana';
import Katakana from './Katakana';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Quiz' element={<Quiz />} />
        <Route path='Hirigana' element={<Hirigana />} />
        <Route path='Katakana' element={<Katakana />} />
      </Routes>
    </div>
  );
}

export default App;
