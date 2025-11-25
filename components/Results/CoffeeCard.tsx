import Image from "next/image"
import React from 'react'

export default function CoffeeCard() {
  let uri: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F02%2F39%2F52%2F43%2F1000_F_239524385_d7PcBw7CnAovHjRJtzDrUNkRBBjaiz2B.jpg&f=1&nofb=1&ipt=b2bbf6d6952efc1a7e3d79ffcf7d148649cebf6589dbf9959c075fa2419cd7b8';

  let roast: string = 'Placeholder';
  let acidity: string = 'Placeholder';
  let process: string = 'Placeholder';
  let sentence: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore velit quis fugiat debitis, dolorem.';
  const tags: string[] = ['Bold', 'Choco', 'Tropical']
  return (
    <div className='max-w-sm w-full rounded shadow-lg bg-gray-50'>
      {/* Image */}
      <div className="w-full h-60 relative">
        <Image
          src={uri}
          alt="Coffee Bag"
          fill
          className="object-cover rounded-t"
        />
      </div>

        {/* Name and Description */}
        <div className="px-6 py-4">
          <h3 className='font-bold text-2xl mb-2'>Death Wish Coffee</h3>
          <p className='text-gray-700 text-base'>{sentence}</p> {/* What should be the max text?*/}
        </div>




      {/* Labels */}
      <div className="grid grid-cols-3 items-center px-6 py-4">
        <h4 className='col-span-1 text-lg'>Roast:</h4>
        <p className="col-span-2 text-gray-700">{roast}</p>
        
        <h4 className='col-span-1 text-lg'>Acidity:</h4>
        <p className="col-span-2 text-gray-700">{acidity}</p>
        
        <h4 className='col-span-1 text-lg'>Process:</h4>
        <p className="col-span-2 text-gray-700">{process}</p>
      </div>


      {/* Tags */}
      <div className="px-6 pt-4 pb-2">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">{tag}</span>
        ))}
      </div>

      <div className="p-4">
        <button className='w-full py-2 rounded-lg text-xl bg-yellow-600 text-white font-semibold'>View More</button>
      </div>
    </div>
  )
}
