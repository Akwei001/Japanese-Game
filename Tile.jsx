import React from 'react';

function Tile({ hirigana, katakana, romaji }) {
  // const hiriganaTile = romaji.filter((tile) => tile.romaji);
  console.log(romaji);
  return (
    <div className=''>
      <div className='w-20 h-20 border border-solid border-white-600'>
        {hirigana}
        {/* {hiriganaTile} */}
      </div>
    </div>
  );
}

export default Tile;
