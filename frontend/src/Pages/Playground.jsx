import React from 'react'
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'

const Playground = () => {
  return (
    <div className="bg-black h-[160vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
        <h1 className="text-fuchsia-400 text-6xl anton text-center mt-3" >Predict and Let the Fun Begin</h1>
        <VoteComp/>
        <VoteComp/>
        <VoteComp/>

        
        
    </div>
  )
}

export default Playground
