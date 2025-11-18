import { FiCoffee } from "react-icons/fi";
import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4 w-full">
      <h1 className="text-xl font-semibold flex gap-3">
        <FiCoffee /> <span>Coffee List</span>
      </h1>

      <nav className="space-x-6 text-md">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </div>
  );
}