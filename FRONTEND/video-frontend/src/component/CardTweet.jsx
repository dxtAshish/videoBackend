import React from 'react'

export const CardTweet = (props) => {
  return (
    <div className='w-[25%] p-4 rounded-lg border-2 bg-white'>
        <div className='flex gap-2 items-center' > 
         <img src="" alt=""className='w-[20px] h-[20px] rounded-lg bg-black' />
         <h1 className='text-xl font-medium'>username</h1>
         </div> 
           <div>
                <p>{props.content}</p>
            </div>
            <div>
                <button className='bg-blue-700'>like</button>
            </div>
    </div>
  )
}
