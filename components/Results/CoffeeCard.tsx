import Image from "next/image"
import React from 'react'

export default function CoffeeCard() {
  return (
    <div className='bg-white grid grid-cols-1 rounded shadow '>
      <div>
        <Image 
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F02%2F39%2F52%2F43%2F1000_F_239524385_d7PcBw7CnAovHjRJtzDrUNkRBBjaiz2B.jpg&f=1&nofb=1&ipt=b2bbf6d6952efc1a7e3d79ffcf7d148649cebf6589dbf9959c075fa2419cd7b8'
          width={250}
          height={500}
          alt="Coffee Bag"
        />
      </div>

      <section className="p-6">
        {/* Name and Description */}
        <div className="">
          <h3 className='mb-3  text-2xl font-semibold leading-8'>Death Wish Coffee</h3>
          <p className=''>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Labore velit quis fugiat debitis, doloremque voluptatibus ipsum consequatur 
            incidunt aperiam error reiciendis, porro deleniti, quae dolores possimus perspiciatis 
            aliquam voluptate eius!
            </p>
        </div>

        {/* Labels */}
        <div>

        </div>


        {/* Stats */}
        <div>

        </div>
        <button className=' w-20 border rounded bg-blue-400' >start</button>
      </section>
    </div>
  )
}
