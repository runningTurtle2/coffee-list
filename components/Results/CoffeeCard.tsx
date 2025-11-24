import Image from "next/image"
import React from 'react'

export default function CoffeeCard() {
  let uri: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F02%2F39%2F52%2F43%2F1000_F_239524385_d7PcBw7CnAovHjRJtzDrUNkRBBjaiz2B.jpg&f=1&nofb=1&ipt=b2bbf6d6952efc1a7e3d79ffcf7d148649cebf6589dbf9959c075fa2419cd7b8';

  let roastLevel: string = 'Placeholder';
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg '>
      <div className="flex flex-col w-full items-center">
        <Image
          src={uri}
          width={250}
          height={500}
          alt="Coffee Bag"
        />

        {/* Name and Description */}
        <div className="px-6 py-4">
          <h3 className='font-bold text-xl mb-2'>Death Wish Coffee</h3>
          <p className='text-gray-700 text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Labore velit quis fugiat debitis, doloremque voluptatibus ipsum consequatur
            incidunt aperiam error reiciendis, porro deleniti, quae dolores possimus perspiciatis
            aliquam voluptate eius!
          </p>
        </div>
      </div>


      {/* Labels */}
      <div>
        <h4 className='font-semi-bold text-lg'>Roast Level: </h4><span>{roastLevel}</span>
      </div>


      {/* Stats */}
      <div>

      </div>
      <button className=' w-20 border rounded bg-blue-400' >start</button>
    </div>
  )
}
