
function MusicPlayer({ song }) {
  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex items-center space-x-4">
        <img
          src={song.artworkUrl100}
          alt={song.trackName}
          className="w-20 h-20 rounded-lg"
        />
        <div>
          <h2 className="text-xl font-semibold">{song.trackName}</h2>
          <p className="text-gray-400">{song.artistName}</p>
        </div>
      </div>

      <audio
        controls
        src={song.previewUrl}
        className="mt-4 w-full rounded-lg"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
