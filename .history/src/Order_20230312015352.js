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
        <div className='mx-20 '>
          <div className='flex border-box p-4 order justify-center items-center justify-between'>
            <div>
              <img src={img}></img>
            </div>
            <div>
              <h1 className='text-lg'>ROLEX Oyster Perpetual Explorer</h1>
              <p>143963 x</p>
            </div>
            <div>
              <h3 className='text-xl'>$34.222</h3>
            </div>
            <div className='bg-gray-300 h-10 w-20 flex justify-center items-center'>
                - 1 +
              </div>
          </div>
          <div className='flex border-box p-4 order mt-4 justify-between justify-center items-center'>
            <div>
              <img src={im}></img>
            </div>
            <div>
              <h1 className='text-lg'>ROLEX Oyster Perpetual Explorer</h1>
              <p>143963 x</p>
            </div>
            <div>
              <h3 className='text-xl'>$34.222</h3>
            </div>
            <div>
              <div className='bg-gray-300 h-10 w-20 flex justify-center items-center'>
                - 1 +
              </div>
            </div>
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