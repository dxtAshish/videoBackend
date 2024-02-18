import React from 'react'
import { Card } from '../component/Card'
import vite from '/vite.svg'
export const Profile = () => {
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
        <div className='flex w-full h-[300px]  bg-black rounded-lg'>
          <img src={vite} alt="coverImage" className='w-full'/>
        </div>
        <div className='flex gap-[100px] mt-4  items-center'>
          <div className='w-[250px] h-[250px] rounded-full bg-black flex justify-center items-center'>
            <img src={vite} alt="avatar" className='w-[200px] h-[200px]' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-3xl underline  font-bold'>Ashish dixit</h1>
            <h1 className=' text-xl font-medium'> @ashishdxt</h1>
            <h1 className='text-lx font-medium'>subscriber :1m</h1>
            <button className=' bg-[#d3d3c1] flex py-1 text-center w-[60px] rounded-lg justify-center'>Edit</button>
          </div>
        </div>
        
        
      </section>
      <section>
      <div className="grid grid-cols-5 gap-4">
      {videos.map((item, index) => (
        
        <Card key={index} title={item.title} />
      ))}
    </div>
      </section>
    </div>
  )
}
