// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Hirigana from './Hirigana';
import Katakana from './katakana';
import Home from './Home';

function App() {
  //We want to get a random hirigana and a random katakana
  //handleChange
  //onChange
  //onSubmit
  //Score counter
  //What other components will I need
  // const [input, setInput] = useState('');
  // const [current, setCurrent] = useState(0);
  // const [score, setScore] = useState(0);
  // const [highscore, setHighscore] = useState(0);
  // const [error, setError] = useState(false);
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  // console.log(current);
  // const setRandom = () => {
  //   const randomIndex = Math.floor(Math.random() * kana.length);
  //   // Math.floor(Math.random() * katakana.length);
  //   setCurrent(randomIndex);
  // };
  // console.log(kana[current].romaji);
  // // const setRandomKatakana = () => {
  // //   const randomIndex = Math.floor(Math.random() * katakana.length);
  // //   setCurrent(randomIndex);
  // // };
  // const handleSubmit = (e) => {
  //   e.preventDefault(e.target.value);
  //   // We need to submit the input and compare it to the random index
  //   if (
  //     input.toLowerCase() === kana[current].romaji
  //     // input.toLowerCase() === katakana[current].romaji
  //   ) {
  //     setScore(score + 1);
  //     setHighscore(score + 1 > highscore ? score + 1 : highscore);
  //     localStorage.setItem('score', score + 1);
  //     localStorage.setItem(
  //       'highscore',
  //       score + 1 > highscore ? score + 1 : highscore
  //     );
  //     setError(false);
  //   } else {
  //     const h = kana[current].hirigana;
  //     const hr = kana[current].romaji;
  //     const k = kana[current].katakana;
  //     const kr = kana[current].romaji;
  //     console.log(k);
  //     console.log(h);
  //     // if (input === h && input === k) {
  //     //   setError(`Wrong! The correct answer for ${h} is ${hr}`);
  //     // } else {
  //     //   setError(`Wrong! The correct answer for ${k} is ${kr}`);
  //     // }
  //     setError(
  //       `Wrong! The correct answer is ${hr}` ||
  //         `Wrong! The correct answer is ${kr}`
  //     );
  //     setScore(0);
  //     localStorage.setItem('score', 0);
  //   }
  //   setInput('');
  //   setRandom();
  // };
  // useEffect(() => {
  //   setRandom();
  //   setScore(parseInt(localStorage.getItem('score')) || 0);
  //   setHighscore(parseInt(localStorage.getItem('score')) || 0);
  // }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Quiz' element={<Quiz />} />
        {/* <Route path='about' element={<Hirigana />} /> */}
        {/* <Route path="contact" element={ <Katakana/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
