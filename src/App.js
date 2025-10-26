import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Genre from "./pages/Genre";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-white text-white flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Routes: semua halaman ditaruh di sini */}
        <Routes>
          {/* Halaman Utama */}
          <Route
            path="/"
            element={
              <div className="flex w-full max-w-6xl mt-24 gap-6 px-6">
                {/* Music List */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-6 text-center text-black">
                    🎧 Explore Songs
                  </h1>
                  <MusicList setCurrentSong={setCurrentSong} />
                </div>

                {/* Music Player */}
                <div className="w-[300px] sticky top-28">
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
            }
          />

          {/* Halaman About */}
          <Route path="/about" element={<About />} />

          {/* Halaman Genre */}
          <Route path="/genre" element={<Genre />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
