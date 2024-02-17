import React from 'react'
import { CardTweet } from '../component/CardTweet'
export const Tweet = () => {
  const tweets=[{
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti"
  },
  {
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti"
  },
  {
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti"
  },
  {
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti"
  }]
  return (
    <div className='flex flex-col gap-4 p-4'>
{
  tweets.map((item,index)=>(
     <CardTweet key={index} content={item.content}/>
  ))
}
    </div>
  )
}
