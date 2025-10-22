
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-green-400 text-white px-10 py-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <span className="text-purple-400 text-3xl"></span>
        <h1 className="text-2xl font-bold">MusicFy</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-10 text-base">
        <li><a href="#" className="hover:text-green-400 px-3 py-2 rounded transition">Home</a></li>
        <li><a href="#" className="hover:text-green-400 px-3 py-2 rounded transition">Discover</a></li>
        <li><a href="#" className="hover:text-green-400 px-3 py-2 rounded transition">Genres</a></li>
        <li><a href="#" className="hover:text-green-400 px-3 py-2 rounded transition">About</a></li>
      </ul>

      {/* Button (optional) */}
      <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-base font-semibold ml-4">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
