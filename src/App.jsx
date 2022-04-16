import { useState, useEffect } from 'react';

function App() {
  const hirigana = [
    { romaji: 'a', hiragana: 'あ' },
    { romaji: 'i', hiragana: 'い' },
    { romaji: 'u', hiragana: 'う' },
    { romaji: 'e', hiragana: 'え' },
    { romaji: 'o', hiragana: 'お' },
    { romaji: 'ka', hiragana: 'か' },
    { romaji: 'ki', hiragana: 'き' },
    { romaji: 'ku', hiragana: 'く' },
    { romaji: 'ke', hiragana: 'け' },
    { romaji: 'ko', hiragana: 'こ' },
    { romaji: 'sa', hiragana: 'さ' },
    { romaji: 'shi', hiragana: 'し' },
    { romaji: 'su', hiragana: 'す' },
    { romaji: 'se', hiragana: 'せ' },
    { romaji: 'so', hiragana: 'そ' },
    { romaji: 'ta', hiragana: 'た' },
    { romaji: 'chi', hiragana: 'ち' },
    { romaji: 'tsu', hiragana: 'つ' },
    { romaji: 'te', hiragana: 'て' },
    { romaji: 'to', hiragana: 'と' },
    { romaji: 'na', hiragana: 'な' },
    { romaji: 'ni', hiragana: 'に' },
    { romaji: 'nu', hiragana: 'ぬ' },
    { romaji: 'ne', hiragana: 'ね' },
    { romaji: 'no', hiragana: 'の' },
    { romaji: 'ha', hiragana: 'は' },
    { romaji: 'hi', hiragana: 'ひ' },
    { romaji: 'fu', hiragana: 'ふ' },
    { romaji: 'he', hiragana: 'へ' },
    { romaji: 'ho', hiragana: 'ほ' },
    { romaji: 'ma', hiragana: 'ま' },
    { romaji: 'mi', hiragana: 'み' },
    { romaji: 'mu', hiragana: 'む' },
    { romaji: 'me', hiragana: 'め' },
    { romaji: 'mo', hiragana: 'も' },
    { romaji: 'ya', hiragana: 'や' },
    { romaji: 'yu', hiragana: 'ゆ' },
    { romaji: 'yo', hiragana: 'よ' },
    { romaji: 'ra', hiragana: 'ら' },
    { romaji: 'ri', hiragana: 'り' },
    { romaji: 'ru', hiragana: 'る' },
    { romaji: 're', hiragana: 'れ' },
    { romaji: 'ro', hiragana: 'ろ' },
    { romaji: 'wa', hiragana: 'わ' },
    { romaji: 'wo', hiragana: 'を' },
    { romaji: 'n', hiragana: 'ん' },
    { romaji: 'ga', hiragana: 'が' },
    { romaji: 'za', hiragana: 'ざ' },
    { romaji: 'da', hiragana: 'だ' },
    { romaji: 'ba', hiragana: 'ば' },
    { romaji: 'pa', hiragana: 'ぱ' },
    { romaji: 'gi', hiragana: 'ぎ' },
    { romaji: 'ji', hiragana: 'じ' },
    { romaji: 'dji', hiragana: 'ぢ' },
    { romaji: 'bi', hiragana: 'び' },
    { romaji: 'pi', hiragana: 'ぴ' },
    { romaji: 'gu', hiragana: 'ぐ' },
    { romaji: 'zu', hiragana: 'ず' },
    { romaji: 'dzu', hiragana: 'づ' },
    { romaji: 'bu', hiragana: 'ぶ' },
    { romaji: 'pu', hiragana: 'ぷ' },
    { romaji: 'ge', hiragana: 'げ' },
    { romaji: 'ze', hiragana: 'ぜ' },
    { romaji: 'de', hiragana: 'で' },
    { romaji: 'be', hiragana: 'べ' },
    { romaji: 'pe', hiragana: 'ぺ' },
    { romaji: 'go', hiragana: 'ご' },
    { romaji: 'zo', hiragana: 'ぞ' },
    { romaji: 'do', hiragana: 'ど' },
    { romaji: 'bo', hiragana: 'ぼ' },
    { romaji: 'po', hiragana: 'ぽ' },
    { romaji: 'v', hiragana: 'ゔ' },
  ];

  const katakana = [
    { romaji: 'a', katakana: 'ア' },
    { romaji: 'i', katakana: 'イ' },
    { romaji: 'u', katakana: 'ウ' },
    { romaji: 'e', katakana: 'エ' },
    { romaji: 'o', katakana: 'オ' },
    { romaji: 'ka', katakana: 'カ' },
    { romaji: 'ki', katakana: 'キ' },
    { romaji: 'ku', katakana: 'ク' },
    { romaji: 'ke', katakana: 'ケ' },
    { romaji: 'ko', katakana: 'コ' },
    { romaji: 'sa', katakana: 'サ' },
    { romaji: 'shi', katakana: 'シ' },
    { romaji: 'su', katakana: 'ス' },
    { romaji: 'se', katakana: 'セ' },
    { romaji: 'so', katakana: 'ソ' },
    { romaji: 'ta', katakana: 'タ' },
    { romaji: 'chi', katakana: 'チ' },
    { romaji: 'tsu', katakana: 'ツ' },
    { romaji: 'te', katakana: 'テ' },
    { romaji: 'to', katakana: 'ト' },
    { romaji: 'na', katakana: 'ナ' },
    { romaji: 'ni', katakana: 'ニ' },
    { romaji: 'nu', katakana: 'ヌ' },
    { romaji: 'ne', katakana: 'ネ' },
    { romaji: 'no', katakana: 'ノ' },
    { romaji: 'ha', katakana: 'ハ' },
    { romaji: 'hi', katakana: 'ヒ' },
    { romaji: 'fu', katakana: 'フ' },
    { romaji: 'he', katakana: 'ヘ' },
    { romaji: 'ho', katakana: 'ホ' },
    { romaji: 'ma', katakana: 'マ' },
    { romaji: 'mi', katakana: 'ミ' },
    { romaji: 'mu', katakana: 'ム' },
    { romaji: 'me', katakana: 'メ' },
    { romaji: 'mo', katakana: 'モ' },
    { romaji: 'ya', katakana: 'ヤ' },
    { romaji: 'yu', katakana: 'ユ' },
    { romaji: 'yo', katakana: 'ヨ' },
    { romaji: 'ra', katakana: 'ラ' },
    { romaji: 'ri', katakana: 'リ' },
    { romaji: 'ru', katakana: 'ル' },
    { romaji: 're', katakana: 'レ' },
    { romaji: 'ro', katakana: 'ロ' },
    { romaji: 'wa', katakana: 'ワ' },
    { romaji: 'wo', katakana: 'ヲ' },
    { romaji: 'n', katakana: 'ン' },
    { romaji: 'ga', katakana: 'ガ' },
    { romaji: 'za', katakana: 'ザ' },
    { romaji: 'da', katakana: 'ダ' },
    { romaji: 'ba', katakana: 'バ' },
    { romaji: 'pa', katakana: 'パ' },
    { romaji: 'gi', katakana: 'ギ' },
    { romaji: 'ji', katakana: 'ジ' },
    { romaji: 'dji', katakana: 'ヂ' },
    { romaji: 'bi', katakana: 'ビ' },
    { romaji: 'pi', katakana: 'ピ' },
    { romaji: 'gu', katakana: 'グ' },
    { romaji: 'zu', katakana: 'ズ' },
    { romaji: 'dzu', katakana: 'ヅ' },
    { romaji: 'bu', katakana: 'ブ' },
    { romaji: 'pu', katakana: 'プ' },
    { romaji: 'ge', katakana: 'ゲ' },
    { romaji: 'ze', katakana: 'ゼ' },
    { romaji: 'de', katakana: 'デ' },
    { romaji: 'be', katakana: 'ベ' },
    { romaji: 'pe', katakana: 'ペ' },
    { romaji: 'go', katakana: 'ゴ' },
    { romaji: 'zo', katakana: 'ゾ' },
    { romaji: 'do', katakana: 'ド' },
    { romaji: 'bo', katakana: 'ボ' },
    { romaji: 'po', katakana: 'ポ' },
    { romaji: 'v', katakana: 'ヴ' },
  ];

  return (
    <div className='App'>
      <h1>Hello world- i'm making a Japanese game</h1>
    </div>
  );
}

export default App;
