import React from 'react'

export const ProfileEdit = () => {
  return (
    <div className='form border-2 border-white flex flex-col justify-center items-center gap-2  '>
    <form action="" className='bg-white flex flex-col border-2 border-black p-4 w-[800px] gap-3 '>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" className='border-2 border-gray-200 p-2 rounded-md' placeholder='fullname' />
      <label htmlFor="username">username</label>
      <input type="text" className='border-2 border-gray-200 p-2 rounded-md' placeholder='username' />
      <label htmlFor="email">email</label>
      <input type="email" className='border-2 border-gray-200 p-2 rounded-md'placeholder='email' />
      <label htmlFor="password">password</label>
      <input type="password"className='border-2 border-gray-200 p-2 rounded-md' placeholder='passsword' />
      <label htmlFor="username">username</label>
      <input type="text"className='border-2 border-gray-200 p-2 rounded-md' placeholder='username' />
       <label htmlFor="avatar">upload avatar</label>
       <input type="file"className='border-2 border-gray-200 p-2 rounded-md' name="avatar" id="avatar" />
       <label htmlFor="coverImage">upload Cover Image</label>
       <input type="file"className='border-2 border-gray-200 p-2 rounded-md' name="coverImage" id="CoverImage" />
    </form>
    <button type='submit'className='bg-blue-600 text-white rounded-lg px-3 py-2'>create</button>
  </div>
  )
}
