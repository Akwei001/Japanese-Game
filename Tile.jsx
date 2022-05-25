import React from 'react';

function Tile({ hirigana, katakana, romaji }) {
  return (
    <div className=''>
      <div className='border-solid border border-white-600 h-20 w-20'>
        {hirigana}
        {romaji}
      </div>
    </div>
  );
}

export default Tile;
