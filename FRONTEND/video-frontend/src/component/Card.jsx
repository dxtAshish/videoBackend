import React from 'react'
import vite from "../../public/vite.svg"
export const Card = (props) => {
  return (
    <div className='bg-white w-fit flex flex-col rounded-lg m-3 p-2 hover:shadow-white hover:shadow-sm'>
        <div>
        <img src={vite} alt="" className='h-[100%] w-[100%]'/>
        </div>
        <div className=' border-t-2 border-[#6c6969] m-2'>
        <h1 className='text-md'>{props.tile}</h1>
        </div>
    </div>
 )
}
