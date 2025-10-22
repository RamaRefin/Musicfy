import { useState } from 'react';
import MusicList from './components/MusicList';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Musicfy</h1>
      <MusicList setCurrentSong={setCurrentSong} />
      {currentSong && <MusicPlayer song={currentSong} />}
    </div>
  );
}

export default App;
