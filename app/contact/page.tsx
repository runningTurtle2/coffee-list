'use client'
import React, { useState, } from 'react'
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');
  const router = useRouter();
  let emptyValue = '';

  const submitForm = (e: any) => {
    e.preventDefault() // avoid page reloading // doing a GET request
    console.log('Submit pushed');
    console.log(
      ' name: ' + name, '\n',
      'email: ' + email, '\n',
      'subject: ' + subject, '\n',
      'comments: ' + comments, '\n'
    );
    
    router.push("/")
  }

  


// name needs to have a set char length <= 30, letters only,


  return (
    <main className='max-w-3xl mx-auto p-8 '>

      {/* Header*/}
      <header className='text-center mb-10'>
        <h1 className='text-3xl'>Help Us Make it Better</h1>
      </header>

      <form onSubmit={submitForm} className='space-y-10'>

        {/**Form Section */}
        <section className='border rounded-md p-6 space-y-8'>

          {/* Name Fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

            <div className=''>
              
              <label className='block text-sm font-medium'>Name <span className='text-red-500'>*</span></label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='John'
                required
                maxLength={30}
                className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
              /> 
            </div>


            <div>
              <label className='block text-sm font-medium'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
              />
            </div>

          </div>

          <div>
            <label className='block text-sm font-medium'>Subject <span className='text-red-500'>*</span></label>
            <input
              type='text'
              value={subject}
              maxLength={30}
              required
              onChange={(e) => setSubject(e.target.value)}
              className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
            />
          </div>

          <div>
            <div>
              <label className='block text-sm font-medium'>Comments <span className='text-red-500'>*</span></label>
              <textarea
                name='comments'
                value={comments}
                required
                onChange={(e) => setComments(e.target.value)}
                placeholder='Write here..'
                className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
              /> 
            </div>
            <p className="text-sm font-light text-gray-400">{comments.length} of 255 max characters</p>
          </div>

          {/* Submit Button*/}
          <button
            type='submit'
            className='bg-neutral-700 text-white py-3 px-8 rounded-2xl  hover:cursor-pointer'>Submit
          </button>

        </section>
      </form>
    </main>
  )
}
