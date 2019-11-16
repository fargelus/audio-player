import React from 'react';
import './../styles/App.css';
import Playlist from './components/Playlist.jsx';
import AudioControls from './components/AudioControls.jsx';


const App = () => {
  return (
    <div className="App">
      <Playlist />
      <AudioControls className="App__controls" />
    </div>
  );
}

export default App;
