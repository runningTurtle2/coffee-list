import { FiCoffee } from "react-icons/fi";
import React from 'react'

export default function Header() {
  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="text-2xl">
        <a href="/"><FiCoffee /></a>
      </div>

      <ul className="flex space-x-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Feedback</a></li>
      </ul>
    </nav>
  );
}