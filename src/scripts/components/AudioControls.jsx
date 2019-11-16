import React from 'react';
import song from '../../assets/music/wonderwall.mp3';


const AudioControls = (props) => {
  return (
    <audio controls src={song} {...props}>
    </audio>
  );
}

export default AudioControls;
