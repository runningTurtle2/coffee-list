import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className='p-8'>
      
      <header className='text-center m-8'>
        <h1 className="text-4xl font-semibold">What About It</h1>
      </header>


      <article className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        <div className='text-2xl grid grid-cols-1 justify-center items-center p-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic aliquid debitis saepe architecto consequatur ab, aperiam, 
            tenetur similique minima ex obcaecati a modi omnis ipsum quod. 
            Quisquam eos sunt soluta.
          </p>
 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic aliquid debitis saepe architecto consequatur ab, aperiam, 
            tenetur similique minima ex obcaecati a modi omnis ipsum quod. 
            Quisquam eos sunt soluta.
          </p>
        </div>

        <div className='p-4 items-center'>
          <Image
            src={"/coffee.png"}
            width={500}
            height={100}
            alt='Coffee Beans'
            />
        </div>
      </article>

      
    </main>
  )
}
