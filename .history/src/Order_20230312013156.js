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
        <div>
          <div className='border-box h-32 w-60 p-4'>
            <div>
              <h1>ROLEX Oyster Perpetual Explorer</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default order