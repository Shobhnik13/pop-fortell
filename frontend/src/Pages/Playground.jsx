import React from 'react'
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'

const Playground = () => {
  return (
    <div className="bg-black h-[300vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
        <h1 className="text-white text-2xl" >Playground</h1>
<div className='flex flex-row flex-wrap'>
    <VoteComp/>
    <VoteComp/>
    <VoteComp/>
    <VoteComp/>
</div>
  
    </div>
  )
}

export default Playground
