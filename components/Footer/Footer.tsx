import React from 'react'
import { FiCoffee, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='flex flex-row h-72 justify-between items-center gap-x-6 p-6 w-full'>
      
      <h1 className='text-4xl gap-2'><FiCoffee/> </h1>

      <div id='socials'>
        <a href='/' className='text-lg flex gap-2 items-center hover:text-gray-600'><FiGithub/>GitHub</a>
        
      </div>

    </div>
  )
}