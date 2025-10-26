
const Genre = () => {
    const genres = [
        { id: 1, name: "Pop", icon: "🎵", color: "bg-green-500" },
        { id: 2, name: "Rock", icon: "🎸", color: "bg-white" },
        { id: 3, name: "Jazz", icon: "🎷", color: "bg-green-500" },
        { id: 4, name: "Hip Hop", icon: "🎤", color: "bg-white" },
        { id: 5, name: "Electronic", icon: "💿", color: "bg-green-500" },
        { id: 6, name: "Classical", icon: "🎻", color: "bg-white" },
        { id: 7, name: "R&B", icon: "🎹", color: "bg-green-500" },
        { id: 8, name: "Country", icon: "🤠", color: "bg-white" },
    ];

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-black mb-8 text-center">Explore Genres</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {genres.map((genre) => (
                    <div
                        key={genre.id}
                        className={`${genre.color} hover:scale-105 transition-transform duration-300 rounded-xl shadow-xl overflow-hidden cursor-pointer`}
                    >
                        <div className="p-6 text-center text-black">
                            <div className="text-4xl mb-3">{genre.icon}</div>
                            <h3 className="text-xl font-semibold">{genre.name}</h3>
                            <p className="mt-2 text-sm opacity-90">
                                Discover {genre.name} music
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genre;