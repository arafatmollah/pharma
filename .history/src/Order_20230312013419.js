import React from 'react'

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
        <div className='mx-20'>
          <div className='border-box h-32 w-80 p-4 order'>
            <div>
              <h1 className='text-lg'>ROLEX Oyster Perpetual Explorer</h1>
              <p>143963 x</p>
            </div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default order