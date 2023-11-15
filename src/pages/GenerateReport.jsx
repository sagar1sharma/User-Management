import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function GenerateReport() {

    
    const location = useLocation()
    const {name, email, phone} = location.state
    console.log(name)

    function handleClick(){
        alert("Report Generated has not been implemented as was not mentioned")
    }

  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Name: {name}</h1>
            </div>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Email: {email}</h1>
            </div>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Phone: {phone}</h1>
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                    onClick={handleClick}
                    className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                    Generate Report
                </button>
            </div>
        </div>
    </div>
  )
}

export default GenerateReport