import React from 'react';
import Kana from './src/libs/data';
import Tile from './Tile';

function TileContainer() {
  const [tile, setTile] = useState(Kana);
  return (
    <div>
      <p>TileContainer</p>
      {tile.map(function (item) {
        return (
          <Tile
            hirigana={item.hirigana}
            katakana={item.katakana}
            romaji={item.romaji}
          />
        );
      })}
    </div>
  );
}

export default TileContainer;
