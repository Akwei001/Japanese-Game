import React from 'react';
import Kana from './src/libs/data';

function Tile(props) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', width: '20%' }}>
      <p>{props.romaji}</p>
    </div>
  );
}

export default Tile;
