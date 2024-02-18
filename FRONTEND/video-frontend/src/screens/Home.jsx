import React from 'react'
import { Card } from '../component/Card'
import vite from '/vite.svg'
export const Home = () => {
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
const openVideo =()=>{
  
}
  return (
  <div>
    <div className=' w-full mx-auto  bg-black h-[200px] justify-center items-center'>
      <img src={vite} alt="" />
    </div>
       <div className="grid grid-cols-5 gap-4">
      {videos.map((item, index) => (
        
        <Card key={index} title={item.title} onclick={openVideo}/>
      ))}
    </div>
      
    </div>  
      
  )
}
