import React from 'react'
import hamburger from "../assets/hamburger.png"
export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 bg-white'>
      <div className='flex gap-2'>
        <button className='bg-black'>
       <img src={hamburger} alt="" />
       </button>
    
        <div className='logo text-2xl font-semibold'>
          <h1>Play videoTweet</h1>
        </div>
      
      </div>
      <div className=' border-black border-2 rounded-lg p-1'>
       
        <input type="search"  className='bg-gray-400 p-2 w-[300px] rounded-md ' placeholder='search'/>
        <button className='p-2'>search</button>
      </div>
      <div className='w-[50px] h-[50px] bg-[#201c1c] rounded-full'>
        <img src="" alt="" />
      </div>
    </div>
  )
}
