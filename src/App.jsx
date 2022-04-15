import { useState, useEffect } from 'react';

function App() {
  const hirigana = [
    { romanji: 'a', hiragana: 'あ' },
    { romanji: 'i', hiragana: 'い' },
    { romanji: 'u', hiragana: 'う' },
    { romanji: 'e', hiragana: 'え' },
    { romanji: 'o', hiragana: 'お' },
    { romanji: 'ka', hiragana: 'か' },
    { romanji: 'ki', hiragana: 'き' },
    { romanji: 'ku', hiragana: 'く' },
    { romanji: 'ke', hiragana: 'け' },
    { romanji: 'ko', hiragana: 'こ' },
    { romanji: 'sa', hiragana: 'さ' },
    { romanji: 'shi', hiragana: 'し' },
    { romanji: 'su', hiragana: 'す' },
    { romanji: 'se', hiragana: 'せ' },
    { romanji: 'so', hiragana: 'そ' },
    { romanji: 'ta', hiragana: 'た' },
    { romanji: 'chi', hiragana: 'ち' },
    { romanji: 'tsu', hiragana: 'つ' },
    { romanji: 'te', hiragana: 'て' },
    { romanji: 'to', hiragana: 'と' },
    { romanji: 'na', hiragana: 'な' },
    { romanji: 'ni', hiragana: 'に' },
    { romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'ne', hiragana: 'ね' },
    { romanji: 'no', hiragana: 'の' },
    { romanji: 'ha', hiragana: 'は' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'fu', hiragana: 'ふ' },
    { romanji: 'he', hiragana: 'へ' },
    { romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'ma', hiragana: 'ま' },
    { romanji: 'mi', hiragana: 'み' },
    { romanji: 'mu', hiragana: 'む' },
    { romanji: 'me', hiragana: 'め' },
    { romanji: 'mo', hiragana: 'も' },
    { romanji: 'ya', hiragana: 'や' },
    { romanji: 'yu', hiragana: 'ゆ' },
    { romanji: 'yo', hiragana: 'よ' },
    { romanji: 'ra', hiragana: 'ら' },
    { romanji: 'ri', hiragana: 'り' },
    { romanji: 'ru', hiragana: 'る' },
    { romanji: 're', hiragana: 'れ' },
    { romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'wa', hiragana: 'わ' },
    { romanji: 'wo', hiragana: 'を' },
    { romanji: 'n', hiragana: 'ん' },
    { romanji: 'ga', hiragana: 'が' },
    { romanji: 'za', hiragana: '' },
    { romanji: 'da', hiragana: '' },
    { romanji: 'ba', hiragana: '' },
    { romanji: 'pa', hiragana: '' },
    { romanji: 'gi', hiragana: '' },
    { romanji: 'ji', hiragana: '' },
    { romanji: 'dji', hiragana: '' },
    { romanji: 'bi', hiragana: '' },
    { romanji: 'pi', hiragana: '' },
    { romanji: 'gu', hiragana: '' },
    { romanji: 'zu', hiragana: '' },
    { romanji: 'dzu', hiragana: '' },
    { romanji: 'bu', hiragana: '' },
    { romanji: 'pu', hiragana: '' },
    { romanji: 'ge', hiragana: '' },
    { romanji: 'ze', hiragana: '' },
    { romanji: 'de', hiragana: '' },
    { romanji: 'be', hiragana: '' },
    { romanji: 'pe', hiragana: '' },
    { romanji: 'go', hiragana: '' },
    { romanji: 'zo', hiragana: '' },
    { romanji: 'do', hiragana: '' },
    { romanji: 'bo', hiragana: '' },
    { romanji: 'po', hiragana: '' },
    { romanji: 'v', hiragana: '' },
  ];

  return (
    <div className='App'>
      <h1>Hello world- i'm making a Japanese game</h1>
    </div>
  );
}

export default App;