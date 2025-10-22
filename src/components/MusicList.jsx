import { useEffect, useState } from "react";

function MusicList({ setCurrentSong }) {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}&entity=song&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [search]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 rounded-l-lg outline-black border border-gray-700 text-black"
        />
        <button
          onClick={() => setSearch(search)}
          className="bg-green-500 hover:bg-green-600 px-3 rounded-r-lg"
        >
          🔍
        </button>
      </div>

      {songs.map((song) => (
        <div
          key={song.trackId}
          onClick={() => setCurrentSong(song)}
          className="cursor-pointer outline-black hover:bg-green-400 p-3 rounded-lg mb-2 flex items-center space-x-3 transition"
        >
          <img
            src={song.artworkUrl100}
            alt={song.trackName}
            className="w-14 h-14 rounded-lg"
          />
          <div>
            <h2 className="text-md font-semibold text-black">{song.trackName}</h2>
            <p className="text-sm text-black">{song.artistName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;
