import { useEffect, useState } from "react";

function MusicList({ setCurrentSong }) {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("eminem");

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}&entity=song&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [search]);

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white"
        />
        <button
          onClick={() => setSearch(search)}
          className="bg-green-500 hover:bg-green-600 px-4 rounded-r-lg"
        >
          🔍
        </button>
      </div>

      {songs.map((song) => (
        <div
          key={song.trackId}
          onClick={() => setCurrentSong(song)}
          className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-4 rounded-lg mb-3 flex items-center space-x-4 transition"
        >
          <img
            src={song.artworkUrl100}
            alt={song.trackName}
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h2 className="text-lg font-semibold">{song.trackName}</h2>
            <p className="text-sm text-gray-400">{song.artistName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;
