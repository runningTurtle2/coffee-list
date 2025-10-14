import { FiCoffee } from "react-icons/fi";


const Topbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-300 bg-white">
      <h1 className="text-xl font-semibold flex gap-3"> <FiCoffee /> Coffee List </h1>
      <nav className="space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Topbar;