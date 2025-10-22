import { useState } from "react";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start p-6">
      <div className="flex w-full max-w-4xl gap-4">
        
        {/* Music List */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">🎵 MusicFy</h1>
          <MusicList setCurrentSong={setCurrentSong} />
        </div>

        {/* Music Player */}
        <div className="w-[300px] sticky top-10">
          {currentSong ? (
            <MusicPlayer song={currentSong} />
          ) : (
            <div className="bg-gray-800 rounded-lg p-6 text-gray-500 text-center">
              <p>No song selected</p>
              <p className="text-sm mt-1">Click a song to play</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default App;
