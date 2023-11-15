import React, { useState } from 'react';
import tableData from '../data/data.json'
import { Link } from 'react-router-dom';

function User(){
    const [myData, setMyData] = useState(tableData)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')

    function handleSearch(){
        if(name !== ''){ setMyData(myData.filter((ele) => {return ele.username.startsWith(name)})) }
        if(email !== "") { setMyData(myData.filter((ele) => {return ele.email.startsWith(email)})) }
        if(phone !== "") { setMyData(myData.filter((ele) => {return ele.phone.startsWith(phone)})) }
        if(date !== "") { setMyData(myData.filter((ele) => {return ele.creationdate.startsWith(date)})) }
    }

    function showall(){
        window.location.href="/users"
    }

  return (
    <div className='flex justify-center'>
        <div onClick={showall}className='absolute top-5 left-5 text-white'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            <span class="sr-only">Show All</span>
            </button>
        </div>
      <h2>Data Table</h2>
      <table>
        <thead className='bg-white'>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Creation Date</th>
            <th>Generate Report</th>
          </tr>
          <tr>
            <button type="button" onClick={handleSearch} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search using
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </button>
            <td><input type='text' className='text-center' placeholder='username' name='username' onChange={(e)=>setName(e.target.value)} ></input></td>
            <td><input type='text' className='text-center' placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)}></input></td>
            <td><input type='text' className='text-center' placeholder='phone' name='phone' onChange={(e)=>setPhone(e.target.value)}></input></td>
            <td><input type='text' className='text-center' placeholder='date' name='date' onChange={(e)=>setDate(e.target.value)}></input></td>
            <td></td>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {myData.map((row) => (
            
            <tr key={row.id}>
              <td >{row.id}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.creationdate}</td>
              <td><Link 
                to={'/generatereport'} state={{name: row.username, email: row.email, phone: row.phone}}> Report</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
