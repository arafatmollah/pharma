import React from 'react'
import './App.css';

function Nav() {
  return (
    <div>
        <div className='box-border h-16 w-100 p-4 mx-20 my-5 rounded-xl'>
          <div className='flex justify-between align-middle'>
                <p className='text-white mt-1'>Search Here</p>
                <button class="btn mb-1"> Button</button>
          </div>
        </div>
        <div className='box-border h-16 w-100 nav'>
            <div className='flex mx-20 items-center justify-between mt-3 text-white'>
            <div className='mt-5'>Home</div>
            <div className='mt-5'> Product</div>
            <div className='mt-5'>Upload Description</div>
            <div className='mt-5'>Doctor Consultation</div>
            <div className='mt-5'>blog</div>
            <div>Contact Us</div>
            <div>More</div>
            </div>
        </div>
    </div>
  )
}

export default Nav