import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const hiriganaTile = [
  { id: 1, romaji: 'a', hirigana: 'あ' },
  { id: 2, romaji: 'i', hirigana: 'い' },
  { id: 3, romaji: 'u', hirigana: 'う' },
  { id: 4, romaji: 'e', hirigana: 'え' },
  { id: 5, romaji: 'o', hirigana: 'お' },
  { id: 6, romaji: 'ka', hirigana: 'か' },
  { id: 7, romaji: 'ki', hirigana: 'き' },
  { id: 8, romaji: 'ku', hirigana: 'く' },
  { id: 9, romaji: 'ke', hirigana: 'け' },
  { id: 10, romaji: 'ko', hirigana: 'こ' },
  { id: 11, romaji: 'sa', hirigana: 'さ' },
  { id: 12, romaji: 'shi', hirigana: 'し' },
  { id: 13, romaji: 'su', hirigana: 'す' },
  { id: 14, romaji: 'se', hirigana: 'せ' },
  { id: 15, romaji: 'so', hirigana: 'そ' },
  { id: 16, romaji: 'ta', hirigana: 'た' },
  { id: 17, romaji: 'chi', hirigana: 'ち' },
  { id: 18, romaji: 'tsu', hirigana: 'つ' },
  { id: 19, romaji: 'te', hirigana: 'て' },
  { id: 20, romaji: 'to', hirigana: 'と' },
  { id: 21, romaji: 'na', hirigana: 'な' },
  { id: 22, romaji: 'ni', hirigana: 'に' },
  { id: 23, romaji: 'nu', hirigana: 'ぬ' },
  { id: 24, romaji: 'ne', hirigana: 'ね' },
  { id: 25, romaji: 'no', hirigana: 'の' },
  { id: 26, romaji: 'ha', hirigana: 'は' },
  { id: 27, romaji: 'hi', hirigana: 'ひ' },
  { id: 28, romaji: 'fu', hirigana: 'ふ' },
  { id: 29, romaji: 'he', hirigana: 'へ' },
  { id: 30, romaji: 'ho', hirigana: 'ほ' },
  { id: 31, romaji: 'ma', hirigana: 'ま' },
  { id: 32, romaji: 'mi', hirigana: 'み' },
  { id: 33, romaji: 'mu', hirigana: 'む' },
  { id: 34, romaji: 'me', hirigana: 'め' },
  { id: 35, romaji: 'mo', hirigana: 'も' },
  { id: 36, romaji: 'ya', hirigana: 'や' },
  { id: 37, romaji: 'yu', hirigana: 'ゆ' },
  { id: 38, romaji: 'yo', hirigana: 'よ' },
  { id: 39, romaji: 'ra', hirigana: 'ら' },
  { id: 40, romaji: 'ri', hirigana: 'り' },
  { id: 41, romaji: 'ru', hirigana: 'る' },
  { id: 42, romaji: 're', hirigana: 'れ' },
  { id: 43, romaji: 'ro', hirigana: 'ろ' },
  { id: 44, romaji: 'wa', hirigana: 'わ' },
  { id: 45, romaji: 'wo', hirigana: 'を' },
  { id: 46, romaji: 'n', hirigana: 'ん' },
  { id: 47, romaji: 'ga', hirigana: 'が' },
  { id: 48, romaji: 'za', hirigana: 'ざ' },
  { id: 49, romaji: 'da', hirigana: 'だ' },
  { id: 50, romaji: 'ba', hirigana: 'ば' },
  { id: 51, romaji: 'pa', hirigana: 'ぱ' },
  { id: 52, romaji: 'gi', hirigana: 'ぎ' },
  { id: 53, romaji: 'ji', hirigana: 'じ' },
  { id: 54, romaji: 'dji', hirigana: 'ぢ' },
  { id: 55, romaji: 'bi', hirigana: 'び' },
  { id: 56, romaji: 'pi', hirigana: 'ぴ' },
  { id: 57, romaji: 'gu', hirigana: 'ぐ' },
  { id: 58, romaji: 'zu', hirigana: 'ず' },
  { id: 59, romaji: 'dzu', hirigana: 'づ' },
  { id: 60, romaji: 'bu', hirigana: 'ぶ' },
  { id: 61, romaji: 'pu', hirigana: 'ぷ' },
  { id: 62, romaji: 'ge', hirigana: 'げ' },
  { id: 63, romaji: 'ze', hirigana: 'ぜ' },
  { id: 64, romaji: 'de', hirigana: 'で' },
  { id: 65, romaji: 'be', hirigana: 'べ' },
  { id: 66, romaji: 'pe', hirigana: 'ぺ' },
  { id: 67, romaji: 'go', hirigana: 'ご' },
  { id: 68, romaji: 'zo', hirigana: 'ぞ' },
  { id: 69, romaji: 'do', hirigana: 'ど' },
  { id: 70, romaji: 'bo', hirigana: 'ぼ' },
  { id: 71, romaji: 'po', hirigana: 'ぽ' },
  { id: 72, romaji: 'v', hirigana: 'ゔ' },
];

function Hirigana() {
  const [htile, setHtile] = useState(hiriganaTile);
  return (
    <div
      className='min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-green-800 text-white text-center text-2xl 
    font-bold uppercase'
    >
      <p>Hirigana page</p>
      <div className='flex'>
        <Link to='/'>Home</Link>
      </div>
      <div className='grid grid-cols-5 gap-4 m-10'>
        {htile.map((tile) => (
          <div key={tile.id}>
            <div className=' bg-white text-black text-6xl font-bold rounded shadow-md w-18 h-18'>
              <div className='py-20'>{tile.hirigana}</div>
              <div className='py-20'>{tile.romaji}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hirigana;
