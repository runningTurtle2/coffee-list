import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-screen border-r border-gray-300 bg-gray-50 p-6 flex flex-col gap-6">
      {/* Search */}
      <div className="bg-white flex items-center rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Find beans..."
          className="flex-grow text-sm outline-none bg-transparent"
        />
        <IoSearch className="text-gray-500 text-lg" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3 text-sm">
        <a href="#" className="hover:text-black text-gray-700">My Beans</a>
        <a href="#" className="hover:text-black text-gray-700">Favorites</a>
        <a href="#" className="hover:text-black text-gray-700">Filters</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
