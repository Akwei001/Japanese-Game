import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white text-center text-2xl  font-sans'>
      <h1 className=' font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-10'>
        <div>Hira-Kana Game</div>
        <div className='text-4xl'>Test your knowledge</div>
      </h1>
      <div className='flex justify-around mt-10'>
        <div className='inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <Link
            to='Quiz'
            className='block px-8 py-3 text-sm font-medium  rounded-full hover:bg-transparent'
          >
            Quiz
          </Link>
        </div>
        <div className='inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <Link
            to='Hirigana'
            className='block px-8 py-3 text-sm font-medium  rounded-full hover:bg-transparent'
          >
            Hirigana
          </Link>
        </div>
        <div className='inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <Link
            to='Katakana '
            className='block px-8 py-3 text-sm font-medium  rounded-full hover:bg-transparent'
          >
            Katakana
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
