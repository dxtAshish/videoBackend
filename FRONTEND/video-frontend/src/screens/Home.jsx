import React from 'react'
import { Card } from '../component/Card'
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
   
       <div className="grid grid-cols-5 gap-4">
      {videos.map((item, index) => (
        
        <Card key={index} title={item.title} onclick={openVideo}/>
      ))}
    </div>
      
        
      
  )
}
