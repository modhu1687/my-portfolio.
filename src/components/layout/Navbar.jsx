import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div>
               
        <h1 className='text-2xl font-bold'>Modhu<span className='text-orange-300'>sudon</span></h1>

      </div>

      <div>

        <ul className='flex gap-12 text-lg text-gray-300'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
         </ul>
        
        </div>

       <div className=' flex gap-4'>
            <button className='bg-gray-300 py-2 px-6 rounded-4xl text-black'>
                mode change
            </button>

            <button className='bg-orange-500 py-2 px-6 rounded-4xl text-white flex items-center gap-2'>
                Hire me
                <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Navbar