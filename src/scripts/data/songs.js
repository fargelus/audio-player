const path = require('path');
const absolutePath = path.resolve(__dirname, 'src/assets/music');

const Songs = [
  {
    'title': 'Invicible',
    'author': 'MGK',
    'src': absolutePath + 'invicible.mp3',
    'duration': '3:06',
  },
  {
    'title': 'Smells Like Teen Spirit',
    'author': 'Nirvana',
    'src': absolutePath + 'smells_like_teen_spirit.mp3',
    'duration': '5:00',
  },
  {
    'title': 'Wonderwall',
    'author': 'Oasis',
    'src': absolutePath + 'wonderwall.mp3',
    'duration': '4:18',
  }
];

export default Songs;
