import React from 'react'

export const Login = () => {
  return (
    <div>
      <form action="" className=' bg-white flex flex-col border-2 border-black p-4 w-[800px] gap-3 '>
      <label htmlFor="username">username</label>
        <input type="text" className='border-2 border-gray-200 p-2 rounded-md' placeholder='username' />
        <label htmlFor="email">email</label>
        <input type="email" className='border-2 border-gray-200 p-2 rounded-md'placeholder='email' />
        <label htmlFor="password">password</label>
      </form>
    </div>
  )
}
