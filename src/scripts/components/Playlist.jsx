import React from 'react';
import Songs from '../data/songs.js';
import '../../styles/composition.css';


const Playlist = () => {
  const createCompositionList = () => {
      return Songs.map((composition, index) => {
        return createCompositionItem(composition, index);
      });
  }

  const createCompositionItem = (item, index) => {
    return (
      <div className="composition" key={index}>
        <div className="composition__info">
          <small>{item.author}</small>
          <div>{item.title}</div>
        </div>

        <div>
          <button className="play-btn" type="button">&#9658;</button>
          <div>{item.duration}</div>
        </div>
      </div>
    );
  }

  const compositions = createCompositionList();
  return (
    <div>
      {compositions}
    </div>
  );
}


export default Playlist;
