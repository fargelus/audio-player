import React, { useState } from 'react';
import './../styles/App.css';
import Playlist from './components/Playlist.jsx';
import AudioControls from './components/AudioControls.jsx';


const App = () => {
  const [ currentSong, setCurrentSong ] = useState('');

  return (
    <div className="App">
      <Playlist onChangeSong={(newSong) => setCurrentSong(newSong)}/>
      <AudioControls song={currentSong} className="App__controls" />
    </div>
  );
}

export default App;
