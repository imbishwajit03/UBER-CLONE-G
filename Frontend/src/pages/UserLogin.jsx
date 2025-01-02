import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');

  }

  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <img className='w-16 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" srcset="" />

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password" className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='Password' />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        </form>

        <p className='text-center'>New Here?<Link to={'/signup'} className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
        to={'/captain-login'}
        className='flex items-center justify-center bg-[#10b461] text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' >Sign in as Captain </Link>
      </div>
    </div>
  )
}

export default Userlogin
