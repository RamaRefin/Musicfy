
function MusicPlayer({ song }) {
  return (
    <div className="w-full max-w-md mx-auto mt-6 outline-black p-5 rounded-xl shadow-xl text-center">
      <img
        src={song.artworkUrl100}
        alt={song.trackName}
        className="w-36 h-36 mx-auto rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-black">{song.trackName}</h2>
      <p className="text-black mb-3">{song.artistName}</p>

      <audio controls src={song.previewUrl} className="w-full rounded-lg">
        Your browser does not support the audio element.
      </audio>

      <p className="text-xs text-gray-500 mt-3">
        Preview from iTunes (30s)
      </p>
    </div>
  );
}

export default MusicPlayer;
