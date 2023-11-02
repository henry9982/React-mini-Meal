import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className='fixed top-0 h-screen w-screen bg-white flex justify-center items-center'>
        <span className="loader"></span>
    </div>
  )
}

export default Loader