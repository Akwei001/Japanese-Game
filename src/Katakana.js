import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import TileContainer from '../TileContainer';
const katakanaTile = [
  { id: 73, romaji: 'a', katakana: 'ア' },
  { id: 74, romaji: 'i', katakana: 'イ' },
  { id: 75, romaji: 'u', katakana: 'ウ' },
  { id: 76, romaji: 'e', katakana: 'エ' },
  { id: 77, romaji: 'o', katakana: 'オ' },
  { id: 78, romaji: 'ka', katakana: 'カ' },
  { id: 79, romaji: 'ki', katakana: 'キ' },
  { id: 80, romaji: 'ku', katakana: 'ク' },
  { id: 81, romaji: 'ke', katakana: 'ケ' },
  { id: 82, romaji: 'ko', katakana: 'コ' },
  { id: 83, romaji: 'sa', katakana: 'サ' },
  { id: 84, romaji: 'shi', katakana: 'シ' },
  { id: 85, romaji: 'su', katakana: 'ス' },
  { id: 86, romaji: 'se', katakana: 'セ' },
  { id: 87, romaji: 'so', katakana: 'ソ' },
  { id: 88, romaji: 'ta', katakana: 'タ' },
  { id: 89, romaji: 'chi', katakana: 'チ' },
  { id: 90, romaji: 'tsu', katakana: 'ツ' },
  { id: 91, romaji: 'te', katakana: 'テ' },
  { id: 92, romaji: 'to', katakana: 'ト' },
  { id: 93, romaji: 'na', katakana: 'ナ' },
  { id: 94, romaji: 'ni', katakana: 'ニ' },
  { id: 95, romaji: 'nu', katakana: 'ヌ' },
  { id: 96, romaji: 'ne', katakana: 'ネ' },
  { id: 97, romaji: 'no', katakana: 'ノ' },
  { id: 98, romaji: 'ha', katakana: 'ハ' },
  { id: 99, romaji: 'hi', katakana: 'ヒ' },
  { id: 100, romaji: 'fu', katakana: 'フ' },
  { id: 101, romaji: 'he', katakana: 'ヘ' },
  { id: 102, romaji: 'ho', katakana: 'ホ' },
  { id: 103, romaji: 'mi', katakana: 'ミ' },
  { id: 104, romaji: 'mu', katakana: 'ム' },
  { id: 105, romaji: 'me', katakana: 'メ' },
  { id: 106, romaji: 'mo', katakana: 'モ' },
  { id: 107, romaji: 'ya', katakana: 'ヤ' },
  { id: 108, romaji: 'yu', katakana: 'ユ' },
  { id: 109, romaji: 'yo', katakana: 'ヨ' },
  { id: 110, romaji: 'ra', katakana: 'ラ' },
  { id: 111, romaji: 'ri', katakana: 'リ' },
  { id: 112, romaji: 'ru', katakana: 'ル' },
  { id: 113, romaji: 're', katakana: 'レ' },
  { id: 114, romaji: 'ro', katakana: 'ロ' },
  { id: 115, romaji: 'wa', katakana: 'ワ' },
  { id: 116, romaji: 'wo', katakana: 'ヲ' },
  { id: 117, romaji: 'n', katakana: 'ン' },
  { id: 118, romaji: 'ga', katakana: 'ガ' },
  { id: 119, romaji: 'za', katakana: 'ザ' },
  { id: 120, romaji: 'da', katakana: 'ダ' },
  { id: 121, romaji: 'ba', katakana: 'バ' },
  { id: 122, romaji: 'pa', katakana: 'パ' },
  { id: 123, romaji: 'gi', katakana: 'ギ' },
  { id: 124, romaji: 'ji', katakana: 'ジ' },
  { id: 125, romaji: 'dji', katakana: 'ヂ' },
  { id: 126, romaji: 'bi', katakana: 'ビ' },
  { id: 127, romaji: 'pi', katakana: 'ピ' },
  { id: 128, romaji: 'gu', katakana: 'グ' },
  { id: 129, romaji: 'zu', katakana: 'ズ' },
  { id: 130, romaji: 'dzu', katakana: 'ヅ' },
  { id: 131, romaji: 'bu', katakana: 'ブ' },
  { id: 132, romaji: 'pu', katakana: 'プ' },
  { id: 133, romaji: 'ge', katakana: 'ゲ' },
  { id: 134, romaji: 'ze', katakana: 'ゼ' },
  { id: 135, romaji: 'de', katakana: 'デ' },
  { id: 136, romaji: 'be', katakana: 'ベ' },
  { id: 137, romaji: 'pe', katakana: 'ペ' },
  { id: 138, romaji: 'go', katakana: 'ゴ' },
  { id: 139, romaji: 'zo', katakana: 'ゾ' },
  { id: 140, romaji: 'do', katakana: 'ド' },
  { id: 141, romaji: 'bo', katakana: 'ボ' },
  { id: 142, romaji: 'po', katakana: 'ポ' },
  { id: 143, romaji: 'v', katakana: 'ヴ' },
];

function Katakana() {
  const [ktile, setKtile] = useState(katakanaTile);
  return (
    <div className='min-h-screen text-center text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
      <header className='p-6 mb-8'>
        <div className='flex justify-between'>
          <div className=' p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
            <Link
              to='/'
              className='block px-8 py-3 text-sm font-medium rounded-full hover:bg-transparent'
            >
              Home
            </Link>
          </div>
          <div className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Katakana
          </div>
        </div>
      </header>

      <div className='grid grid-cols-5 gap-4 m-10'>
        {ktile.map((tile) => (
          <div key={tile.id}>
            <div className='text-6xl font-bold text-black bg-white rounded shadow-md w-18 h-18'>
              <div className='py-20'>{tile.katakana}</div>
              <div className='py-20'>{tile.romaji}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Katakana;
