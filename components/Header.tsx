import { FiCoffee } from "react-icons/fi";
import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <nav className="relative flex items-center justify-between p-4">
        
        <div className="flex flex-row gap-4 items-center">
          <a href="/"><FiCoffee size={26} /> </a>
          <h3 className="text-2xl font-bold tracking-tighter">Coffee List</h3>
        </div>

        <ul className="flex space-x-6 font-bold">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Feedback</a></li>
        </ul>

      </nav>

    </header>
  );
}