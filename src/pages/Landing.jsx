import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {

  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-black px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-5xl mb-4 font-bold logo'>User Management</h1>
            </div>
            <div className=' flex justify-center mb-3'>
                <Link to={'/users'}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    User Details
                </Link>
            </div>
            <div className=' flex justify-center mb-3'>
                <Link to={'/adduser'}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    Account Creation
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing