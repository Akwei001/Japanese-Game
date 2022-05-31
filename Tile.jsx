import React from 'react';

function Tile({ hirigana, katakana, romaji }) {
  // const hiriganaTile = romaji.filter((tile) => tile.romaji);
  console.log(romaji);
  return (
    <div className=''>
      <div className='border-solid border border-white-600 h-20 w-20'>
        {hirigana}
        {/* {hiriganaTile} */}
      </div>
    </div>
  );
}

export default Tile;
