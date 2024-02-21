import React from 'react'
import { Card } from '../component/Card'
import vite from '/vite.svg'
import { Link } from 'react-router-dom'
export const Home = () => {
  const videos=[{
    title:"this is video",
    desc:"this is video description",
    url:"https://res.cloudinary.com/demo/video/upload/fl_splice,l_video:ski_jump/e_reverse/fl_layer_apply/fl_splice,l_video:ski_jump/e_accelerate:-50/fl_layer_apply/c_scale,w_400/r_max/ski_jump.mp4"
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
  window.location('/video')
}
  return (
  <div>
    <div className=' w-full mx-auto  bg-black h-[200px] justify-center items-center'>
      <img src={vite} alt="" />
    </div>
       <div className="grid grid-cols-5 gap-4">
      {videos.map((item, index) => (
        <Link key={index} to="/video">
        <Card key={index} title={item.title} onclick={openVideo}/>
        </Link>
      ))}
    </div>
      
    </div>  
      
  )
}
