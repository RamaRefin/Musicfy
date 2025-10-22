
function MusicPlayer({ song }) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-xl text-center">
      <img
        src={song.artworkUrl100}
        alt={song.trackName}
        className="w-40 h-40 mx-auto rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold">{song.trackName}</h2>
      <p className="text-gray-400 mb-4">{song.artistName}</p>

      <audio controls src={song.previewUrl} className="w-full rounded-lg">
        Your browser does not support the audio element.
      </audio>

      <p className="text-xs text-gray-500 mt-3">
        Preview from iTunes (30s)
      </p>

    <div
        key={song.trackId}
        className="bg-gray-800 p-5 rounded-xl shadow-xl text-center transition-all duration-500 animate-fadeIn"
    ></div>         
    </div>
  );
}

export default MusicPlayer;
