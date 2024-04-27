import React from 'react'
import VideoCard from '../component/VideoCard'
import vite from '/vite.svg'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
  
 const navigate=useNavigate()

  const handleEditClick = () => {
    navigate('/editProfile')
  };

  const videos=[{
    title:"this is video"
  },
  {
    title:"this is second video"
  },
  {
    title:"this is  third video"
  },
  {
    title:"this is fourth video"
  },
  {
    title:"this is fifth video"
  },
  {
    title:"this is video"
  },
  {
    title:"this is second video"
  },
  {
    title:"this is  third video"
  },
  {
    title:"this is fourth video"
  },
  {
    title:"this is fifth video"
  },
]
  return (
    <div className='flex flex-col p-4 gap-[90px]'>
      <section className='flex flex-col gap-70px]'>
        <div className='flex lg:w-full w-full lg:h-[300px] h-[100px]  bg-black rounded-lg'>
          <img src={vite} alt="coverImage" className='w-full'/>
        </div>
        <div className='flex lg:gap-[100px] gap-[50px] mt-4  items-center'>
          <div className='lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] lg:rounded-full rounded-full bg-black flex justify-center items-center'>
            <img src={vite} alt="avatar" className='lg:w-[200px] lg:h-[200px] w-[50px] h-[50px] rounded-full' />
          </div>
          <div className='flex flex-col'>
            <h1 className='lg:text-3xl text-xl underline  font-bold'>Ashish dixit</h1>
            <h1 className=' lg:text-xl text-lg font-medium'> @ashishdxt</h1>
            <h1 className='lg:text-lg text-md font-medium'>subscriber :1m</h1>
            <button className=' bg-[#d3d3c1] flex py-1 text-center w-[60px] rounded-lg justify-center' onClick={handleEditClick}>Edit</button>
          </div>
        </div>
        
        
      </section>
      <section>
      <div className="flex flex-row flex-wrap justify-between">
      {videos.map((item, index) => (
        
        <VideoCard key={index} title={item.title} />
      ))}
    </div>
      </section>
    </div>
  )
}
