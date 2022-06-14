import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from '../src/Quiz';
import Hirigana from '../src/Hirigana';
import Katakana from '../src/Katakana';
import Home from '../src/Home';

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
