import React from 'react';
import Songs from '../data/songs.js';
import '../../styles/composition.css';


const Playlist = props => {
  const createCompositionList = () => {
      return Songs.map((composition, index) => {
        return createCompositionItem(composition, index);
      });
  }

  const createCompositionItem = (item, index) => (
    <div className="composition" key={index}>
      <div className="composition__info">
        <small>{item.author}</small>
        <div>{item.title}</div>
      </div>

      <div>
        <button type="button"
                onClick={() => props.onChangeSong(item.src)}
                className="play-btn">
          &#9658;
        </button>
        <div>{item.duration}</div>
      </div>
    </div>
  );

  const compositions = createCompositionList();
  return (
    <div>
      {compositions}
    </div>
  );
}


export default Playlist;
