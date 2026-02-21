import React from 'react'
import { FiCoffee, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className='w-full border border-t border-gray-300 bg-white py-6 text-sm'>
      <div className='flex flex-row min-h-36  mx-auto px-6 justify-between items-center gap-x-6 p-6 w-full'>
        
        <h1 className='text-4xl gap-2'><FiCoffee/> </h1>

        <div id='socials'>
          <a href='https://github.com/runningTurtle2/coffee-list' className='text-lg flex gap-2 items-center hover:text-gray-600'><FiGithub/>GitHub</a>
          
        </div>

      </div>
    </footer>
  )
}