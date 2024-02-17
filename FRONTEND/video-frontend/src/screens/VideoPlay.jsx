import React from 'react'
import { Card } from '../component/Card'
import ReactPlayer from 'react-player'
export const VideoPlay = () => {

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
    <div className='flex flex-col mt-4'>
    <div className='p-4'> 
      <ReactPlayer 
      controls={true} 
      url='https://res.cloudinary.com/demo/video/upload/fl_splice,l_video:ski_jump/e_reverse/fl_layer_apply/fl_splice,l_video:ski_jump/e_accelerate:-50/fl_layer_apply/c_scale,w_400/r_max/ski_jump.mp4'
      width="640px"
      height="360px"/>
    </div>
    <div className="grid grid-cols-5 gap-4">
      {videos.map((item, index) => (
        
        <Card key={index} title={item.title} />
      ))}
    </div>
    </div>
  )
}
