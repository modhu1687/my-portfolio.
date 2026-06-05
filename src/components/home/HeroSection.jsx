import React from 'react'
import modhu from '../../assets/images/modhu.png'
import { useState } from 'react'

const HeroSectio = () => {

  return (
    <div className='justify-between'>

<div className='grid grid-cols-2 gap-4 h-screen items-center px-48'>

  <div className=' '>
    <p className='text-orange-500 text-xl mb-8'>
      Available for work
    </p>
    <h1 className='text-4xl font-bold mb-8'>
      Hi, I'm Modhusudon.
    </h1>
    <p className='text-2xl mb-8'>
      Freelance UI/UX Designer & Frontend Developer. I design and build digital products that people love to use — fast, clean, and accessible.
    </p>

    <div className='flex gap-2 mb-8'>
      <button className='bg-orange-500 text-white px-6 py-3 rounded-lg hover:border-2 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 '>
        Hire Me
      </button>
      <button className='bg-gray-300 text-gray-700 px-6 py-3 rounded-lg'>
        View Portfolio
      </button>
    </div>

    <div className='flex gap-4'>

  <div>
        <p className='text-4xl font-bold'>34+</p>
      <p>Projects Completed</p>
  </div>

    <div>
        <p className='text-4xl font-bold'>34+</p>
      <p>Projects Completed</p>
  </div>
  
    <div>
        <p className='text-4xl font-bold'>34+</p>
      <p>Projects Completed</p>
  </div>
      
    </div>

  </div>

  <div className='justify-end flex'>
    <img src={modhu} alt="modhu" className='w-96 h-96 object-cover rounded-2xl' />
  </div>
</div>

    </div>
  )
}

export default HeroSectio