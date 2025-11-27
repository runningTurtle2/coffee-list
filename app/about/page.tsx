import React from 'react'
import Image from 'next/image'

export default function AboutPage() {

  const uri = 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <main className='max-w-7xl mx-auto p-2'>
      
      <header className='text-center mb-12'>
        <h1 className="text-3xl font-bold">What About It</h1>
      </header>

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        <div className='text-xl grid grid-cols-1 justify-center gap-2 items-center p-4'>
          <p className='mb-6'>
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

        <div className='p-4 -mx-6 sm:mx-auto h-auto items-center'>
          <Image
            src={uri}
            width={800}
            height={600}
            alt='Coffee Beans'
            className='sm:rounded-xl w-full'
            />
        </div>

      </section>
      <div className='text-xl justify-center items-center my-8 p-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Hic aliquid debitis saepe architecto consequatur ab, aperiam, 
          tenetur similique minima ex obcaecati a modi omnis ipsum quod. 
          Quisquam eos sunt soluta. ebitis saepe architecto consequatur ab, aperiam, 
          tenetur similique minima ex obcaecati a modi omnis ipsum quod. 
          Quisquam eos sunt soluta.
        </p>

      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        <div className='p-4 -mx-6 sm:mx-auto h-auto items-center'>
          <Image
            src={uri}
            width={800}
            height={600}
            alt='Coffee Beans'
            className='sm:rounded-xl w-full'
            />
        </div>
        <div className='text-xl grid grid-cols-1 justify-center gap-2 items-center p-4'>
          <p className='mb-6'>
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


      </section>
            
            
      
    </main>
  )
}
