import React from 'react'
import './App.css';

function Nav() {
  return (
    <div>
        <div className='box-border h-16 w-100 p-4 m-20 rounded-xl'>
          <div className='flex justify-between align-middle'>
                <p className='white'>Search Here</p>
                <button class="btn"> Button</button>
          </div>
        </div>
    </div>
  )
}

export default Nav