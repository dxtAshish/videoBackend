import React from 'react'

export const Profile = () => {
  return (
    <div className='bg-white'>
      <section className='flex flex-col'>
        <div>
          <img src="" alt="coverImage" />
        </div>
        <div className='flex'>
          <div className='h-[100px] w-[100px] rounded-lg'>
            <img src="" alt="avatar" />
          </div>
          <div className='flex flex-col'>
            <h1>fullname</h1>
            <h1> username</h1>
            <h1>subscriber</h1>
          </div>
        </div>
        
      </section>
      <section>all videos</section>
    </div>
  )
}
