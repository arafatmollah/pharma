import React from 'react'
import './App.css';

function Nav() {
  return (
    <div>
        <div className='box-border h-16 w-100 p-4 m-20 rounded-lg'>
          <div className='flex'>
                <p>Search Here</p>
                <button class="btn bg-green-500"> Button</button>
          </div>
        </div>
    </div>
  )
}

export default Nav