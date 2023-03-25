import React from 'react'
import img from './images/img.png'
import im from './images/im.png'

function order() {
  return (
    <div>
        <div className='flex mx-20'>
            <p className='text-green-400'>Shop</p>
            <p className='text-green-400'>/Shop</p>
            <p className='text-purple-400'>/ Order</p>
        </div>
        <div className='mt-2 mx-20'>
          <h3 className='text-lg'>Order Summary</h3>
        </div>
        <div className='mx-20 flex'>
          <div>
            
          </div>
          <div>
          <div>
            <img src={img}></img>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default order