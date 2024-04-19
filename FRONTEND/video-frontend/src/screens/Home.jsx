import React from 'react'
import VideoCard from '../component/VideoCard'
const Home = () => {
  const data=[{
    thumbnail:"abc",
    video:"xyz",
    title:"pqr1",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr2",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr3",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr4",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr5",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr6",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr1",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr2",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr3",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr4",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr5",
    descriptionn:"jkl",
    view:"123"
  },
  {
    thumbnail:"abc",
    video:"xyz",
    title:"pqr6",
    descriptionn:"jkl",
    view:"123"
  }

]
  return (
    <div>
      <div className=' flex flex-row flex-wrap justify-between '>
      {data.map((item)=>
        <VideoCard  title ={item.title}/>
      )}
   </div>
    </div>
  )
}

export default Home