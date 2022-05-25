import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen bg-green-800 text-white text-center text-2xl font-bold uppercase'>
      <h1>Test your knowledge</h1>
      <Link to='Quiz'>Click to view the Quiz</Link>
      <Link to='Hirigana'>This page shows Hirigana</Link>
      <Link to='Katakana'>This page shows Katakana</Link>
    </div>
  );
}

export default Home;
