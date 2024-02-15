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
  }]
  return (
    <div>
      {
      videos.map((item,index)=>{
        <Card title={item.title}/>
        console.log(item.title)
      })
    }
      <h1 className='text-3xl'>this is home</h1>
      
    </div>
  )
}
