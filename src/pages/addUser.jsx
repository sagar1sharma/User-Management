import React, { useState } from 'react'

function AddUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    try {
        if(name == "" || password == ""){
            alert("Please fill all fields")
        }else{
            window.location.href="/"
        }
        
    } catch (error) {
        console.log(error)
    }
    }

  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Add User</h1>
            </div>

            <div>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='User Name'
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Password'
                />
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                    onClick={signup}
                    className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddUser