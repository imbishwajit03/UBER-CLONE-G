import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('{}')

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    })
    console.log(userData);

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div>
      <div className='p-7 h-screen justify-between flex flex-col'>
        <div>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />

            <h3 className='text-lg font-medium mb-2'>What's Our Captain's name?</h3>
            <div className='flex gap-4 mb-5 '>
              <input
                required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type="text" placeholder='First name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
              <input
                required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type="text" placeholder='Last name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />

            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email?</h3>
            <input
              required
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required

              type="password" className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
          </form>

          <p className='text-center'>Already have a account?<Link to={'/captain-login'} className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam reprehenderit sit, ullam fuga quos exercitationem eaque voluptatem magnam eveniet. Natus quos incidunt atque dicta placeat quas recusandae debitis fugit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit atque ad debitis, minus amet quas nisi ducimus. Obcaecati tenetur iusto harum dolores architecto, nostrum odio ut et maiores inventore.</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
