import React from 'react'
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'

const Playground = () => {
  return (
    <div className="bg-black h-[100vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
        <h1 className="text-fuchsia-400 text-7xl anton text-center mt-3" >Predict and let the fun begin </h1>
    </div>
  )
}

export default Playground
