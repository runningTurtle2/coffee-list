import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className=' border'>
      <div className='h-44 text-center'>
        <h1 className="text-2xl">About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid debitis saepe architecto consequatur ab, aperiam, tenetur similique minima ex obcaecati a modi omnis ipsum quod. Quisquam eos sunt soluta.</p>
      </div>


      <div className='items-center'>
        <Image
          src={"/coffee.png"}
          width={500}
          height={500}
          alt='Coffee Beans'
          />
      </div>

      
    </div>
  )
}
