import React from 'react'
import vite from "../../public/vite.svg"
export const Card = (props) => {
  return (
    <div className='bg-white flex flex-col rounded-lg m-3 p-2 hover:shadow-white hover:shadow-sm'>
        <div>
        <img src={vite} alt="" className='h-[100%] w-[100%]'/>
        </div>
        <div className=' border-t-2 border-[#6c6969] m-2'>
         <div className='flex gap-2 items-center' > 
         <img src="" alt=""className='w-[20px] h-[20px] rounded-lg bg-black' />
         <h1>username</h1>
         </div> 
         
        <h1 className='text-md'>{props.title}</h1>
        </div>
    </div>
 )
}
