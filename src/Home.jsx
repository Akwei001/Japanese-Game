import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen bg-green-800 text-yellow-300 text-center text-2xl  font-serif'>
      <h1 className=' font-bold p-10'>Test your knowledge</h1>
      <div className='flex justify-around mt-10'>
        <Link to='Quiz'>Quiz</Link>
        <Link to='Hirigana'>Hirigana</Link>
        <Link to='Katakana'>Katakana</Link>
      </div>
    </div>
  );
}

export default Home;
