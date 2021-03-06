const Kana = [
  { kanaId: 1, romaji: 'a', hirigana: 'あ' },
  { kanaId: 2, romaji: 'i', hirigana: 'い' },
  { kanaId: 3, romaji: 'u', hirigana: 'う' },
  { kanaId: 4, romaji: 'e', hirigana: 'え' },
  { kanaId: 5, romaji: 'o', hirigana: 'お' },
  { kanaId: 6, romaji: 'ka', hirigana: 'か' },
  { kanaId: 7, romaji: 'ki', hirigana: 'き' },
  { kanaId: 8, romaji: 'ku', hirigana: 'く' },
  { kanaId: 9, romaji: 'ke', hirigana: 'け' },
  { kanaId: 10, romaji: 'ko', hirigana: 'こ' },
  { kanaId: 11, romaji: 'sa', hirigana: 'さ' },
  { kanaId: 12, romaji: 'shi', hirigana: 'し' },
  { kanaId: 13, romaji: 'su', hirigana: 'す' },
  { kanaId: 14, romaji: 'se', hirigana: 'せ' },
  { kanaId: 15, romaji: 'so', hirigana: 'そ' },
  { kanaId: 16, romaji: 'ta', hirigana: 'た' },
  { kanaId: 17, romaji: 'chi', hirigana: 'ち' },
  { kanaId: 18, romaji: 'tsu', hirigana: 'つ' },
  { kanaId: 19, romaji: 'te', hirigana: 'て' },
  { kanaId: 20, romaji: 'to', hirigana: 'と' },
  { kanaId: 21, romaji: 'na', hirigana: 'な' },
  { kanaId: 22, romaji: 'ni', hirigana: 'に' },
  { kanaId: 23, romaji: 'nu', hirigana: 'ぬ' },
  { kanaId: 24, romaji: 'ne', hirigana: 'ね' },
  { kanaId: 25, romaji: 'no', hirigana: 'の' },
  { kanaId: 26, romaji: 'ha', hirigana: 'は' },
  { kanaId: 27, romaji: 'hi', hirigana: 'ひ' },
  { kanaId: 28, romaji: 'fu', hirigana: 'ふ' },
  { kanaId: 29, romaji: 'he', hirigana: 'へ' },
  { kanaId: 30, romaji: 'ho', hirigana: 'ほ' },
  { kanaId: 31, romaji: 'ma', hirigana: 'ま' },
  { kanaId: 32, romaji: 'mi', hirigana: 'み' },
  { kanaId: 33, romaji: 'mu', hirigana: 'む' },
  { kanaId: 34, romaji: 'me', hirigana: 'め' },
  { kanaId: 35, romaji: 'mo', hirigana: 'も' },
  { kanaId: 36, romaji: 'ya', hirigana: 'や' },
  { kanaId: 37, romaji: 'yu', hirigana: 'ゆ' },
  { kanaId: 38, romaji: 'yo', hirigana: 'よ' },
  { kanaId: 39, romaji: 'ra', hirigana: 'ら' },
  { kanaId: 40, romaji: 'ri', hirigana: 'り' },
  { kanaId: 41, romaji: 'ru', hirigana: 'る' },
  { kanaId: 42, romaji: 're', hirigana: 'れ' },
  { kanaId: 43, romaji: 'ro', hirigana: 'ろ' },
  { kanaId: 44, romaji: 'wa', hirigana: 'わ' },
  { kanaId: 45, romaji: 'wo', hirigana: 'を' },
  { kanaId: 46, romaji: 'n', hirigana: 'ん' },
  { kanaId: 47, romaji: 'ga', hirigana: 'が' },
  { kanaId: 48, romaji: 'za', hirigana: 'ざ' },
  { kanaId: 49, romaji: 'da', hirigana: 'だ' },
  { kanaId: 50, romaji: 'ba', hirigana: 'ば' },
  { kanaId: 51, romaji: 'pa', hirigana: 'ぱ' },
  { kanaId: 52, romaji: 'gi', hirigana: 'ぎ' },
  { kanaId: 53, romaji: 'ji', hirigana: 'じ' },
  { kanaId: 54, romaji: 'dji', hirigana: 'ぢ' },
  { kanaId: 55, romaji: 'bi', hirigana: 'び' },
  { kanaId: 56, romaji: 'pi', hirigana: 'ぴ' },
  { kanaId: 57, romaji: 'gu', hirigana: 'ぐ' },
  { kanaId: 58, romaji: 'zu', hirigana: 'ず' },
  { kanaId: 59, romaji: 'dzu', hirigana: 'づ' },
  { kanaId: 60, romaji: 'bu', hirigana: 'ぶ' },
  { kanaId: 61, romaji: 'pu', hirigana: 'ぷ' },
  { kanaId: 62, romaji: 'ge', hirigana: 'げ' },
  { kanaId: 63, romaji: 'ze', hirigana: 'ぜ' },
  { kanaId: 64, romaji: 'de', hirigana: 'で' },
  { kanaId: 65, romaji: 'be', hirigana: 'べ' },
  { kanaId: 66, romaji: 'pe', hirigana: 'ぺ' },
  { kanaId: 67, romaji: 'go', hirigana: 'ご' },
  { kanaId: 68, romaji: 'zo', hirigana: 'ぞ' },
  { kanaId: 69, romaji: 'do', hirigana: 'ど' },
  { kanaId: 70, romaji: 'bo', hirigana: 'ぼ' },
  { kanaId: 71, romaji: 'po', hirigana: 'ぽ' },
  { kanaId: 72, romaji: 'v', hirigana: 'ゔ' },
  { kanaId: 73, romaji: 'a', katakana: 'ア' },
  { kanaId: 74, romaji: 'i', katakana: 'イ' },
  { kanaId: 75, romaji: 'u', katakana: 'ウ' },
  { kanaId: 76, romaji: 'e', katakana: 'エ' },
  { kanaId: 77, romaji: 'o', katakana: 'オ' },
  { kanaId: 78, romaji: 'ka', katakana: 'カ' },
  { kanaId: 79, romaji: 'ki', katakana: 'キ' },
  { kanaId: 80, romaji: 'ku', katakana: 'ク' },
  { kanaId: 81, romaji: 'ke', katakana: 'ケ' },
  { kanaId: 82, romaji: 'ko', katakana: 'コ' },
  { kanaId: 83, romaji: 'sa', katakana: 'サ' },
  { kanaId: 84, romaji: 'shi', katakana: 'シ' },
  { kanaId: 85, romaji: 'su', katakana: 'ス' },
  { kanaId: 86, romaji: 'se', katakana: 'セ' },
  { kanaId: 87, romaji: 'so', katakana: 'ソ' },
  { kanaId: 88, romaji: 'ta', katakana: 'タ' },
  { kanaId: 89, romaji: 'chi', katakana: 'チ' },
  { kanaId: 90, romaji: 'tsu', katakana: 'ツ' },
  { kanaId: 91, romaji: 'te', katakana: 'テ' },
  { kanaId: 92, romaji: 'to', katakana: 'ト' },
  { kanaId: 93, romaji: 'na', katakana: 'ナ' },
  { kanaId: 94, romaji: 'ni', katakana: 'ニ' },
  { kanaId: 95, romaji: 'nu', katakana: 'ヌ' },
  { kanaId: 96, romaji: 'ne', katakana: 'ネ' },
  { kanaId: 97, romaji: 'no', katakana: 'ノ' },
  { kanaId: 98, romaji: 'ha', katakana: 'ハ' },
  { kanaId: 99, romaji: 'hi', katakana: 'ヒ' },
  { kanaId: 100, romaji: 'fu', katakana: 'フ' },
  { kanaId: 101, romaji: 'he', katakana: 'ヘ' },
  { kanaId: 102, romaji: 'ho', katakana: 'ホ' },
  { kanaId: 103, romaji: 'mi', katakana: 'ミ' },
  { kanaId: 104, romaji: 'mu', katakana: 'ム' },
  { kanaId: 105, romaji: 'me', katakana: 'メ' },
  { kanaId: 106, romaji: 'mo', katakana: 'モ' },
  { kanaId: 107, romaji: 'ya', katakana: 'ヤ' },
  { kanaId: 108, romaji: 'yu', katakana: 'ユ' },
  { kanaId: 109, romaji: 'yo', katakana: 'ヨ' },
  { kanaId: 110, romaji: 'ra', katakana: 'ラ' },
  { kanaId: 111, romaji: 'ri', katakana: 'リ' },
  { kanaId: 112, romaji: 'ru', katakana: 'ル' },
  { kanaId: 113, romaji: 're', katakana: 'レ' },
  { kanaId: 114, romaji: 'ro', katakana: 'ロ' },
  { kanaId: 115, romaji: 'wa', katakana: 'ワ' },
  { kanaId: 116, romaji: 'wo', katakana: 'ヲ' },
  { kanaId: 117, romaji: 'n', katakana: 'ン' },
  { kanaId: 118, romaji: 'ga', katakana: 'ガ' },
  { kanaId: 119, romaji: 'za', katakana: 'ザ' },
  { kanaId: 120, romaji: 'da', katakana: 'ダ' },
  { kanaId: 121, romaji: 'ba', katakana: 'バ' },
  { kanaId: 122, romaji: 'pa', katakana: 'パ' },
  { kanaId: 123, romaji: 'gi', katakana: 'ギ' },
  { kanaId: 124, romaji: 'ji', katakana: 'ジ' },
  { kanaId: 125, romaji: 'dji', katakana: 'ヂ' },
  { kanaId: 126, romaji: 'bi', katakana: 'ビ' },
  { kanaId: 127, romaji: 'pi', katakana: 'ピ' },
  { kanaId: 128, romaji: 'gu', katakana: 'グ' },
  { kanaId: 129, romaji: 'zu', katakana: 'ズ' },
  { kanaId: 130, romaji: 'dzu', katakana: 'ヅ' },
  { kanaId: 131, romaji: 'bu', katakana: 'ブ' },
  { kanaId: 132, romaji: 'pu', katakana: 'プ' },
  { kanaId: 133, romaji: 'ge', katakana: 'ゲ' },
  { kanaId: 134, romaji: 'ze', katakana: 'ゼ' },
  { kanaId: 135, romaji: 'de', katakana: 'デ' },
  { kanaId: 136, romaji: 'be', katakana: 'ベ' },
  { kanaId: 137, romaji: 'pe', katakana: 'ペ' },
  { kanaId: 138, romaji: 'go', katakana: 'ゴ' },
  { kanaId: 139, romaji: 'zo', katakana: 'ゾ' },
  { kanaId: 140, romaji: 'do', katakana: 'ド' },
  { kanaId: 141, romaji: 'bo', katakana: 'ボ' },
  { kanaId: 142, romaji: 'po', katakana: 'ポ' },
  { kanaId: 143, romaji: 'v', katakana: 'ヴ' },
];

export default Kana;
