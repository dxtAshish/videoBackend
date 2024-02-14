import React from 'react'
import hamburger from "../assets/hamburger.png"
export const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white p-2'>
      <div className='flex gap-2'>
         
     
        <button className='bg-black'>
       <img src={hamburger} alt="" />
       </button>
    
        <div className='logo '>
          <h1>Play videoTweet</h1>
        </div>
      
      </div>
      <div className=' border-black border-2'>
       
        <input type="search"  className='bg-gray-400' placeholder='search'/>
        <button>search</button>
      </div>
      <div className='w-[50px] h-[50px] bg-[#212121] rounded-full'>
        <img src="" alt="" />
      </div>
    </div>
  )
}
