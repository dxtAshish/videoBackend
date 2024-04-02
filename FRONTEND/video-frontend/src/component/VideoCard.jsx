import React from 'react'
import vite from '../../public/vite.svg'
const VideoCard = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-[25px] w-[300px] bg-black'>
      <div className='flex flex-col  '>
        <div>
            <img src={vite} alt="" width='200px' height='120px' />
        </div>
        <div className='flex flex-col '>
            <h1 className='text-white text-xl '>here come our title</h1>
            <div className='flex flex-row gap-2'>
               <img src={vite} alt="" height={40} width={40} className='bg-white rounded-full'/>
                <h1 className='font-10 text-size-10 text-white'>video owner</h1>
            </div>
        </div>
        
      </div>
      <div className='flex flex-row gap-[100px] p-2'>
        <h1 className='text-white font-lg'>subscriber: 3M</h1>
        <h1 className='text-white font-sm'>269k: view</h1>
      </div>
    </div>
  )
}

export default VideoCard
