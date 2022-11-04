import React from 'react'
import Navbar from '../Components/Navbar'

const Playground = () => {
  return (
    <div className="bg-black h-[100vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
        <h1 className="text-white text-2xl" >Playground</h1>
    </div>
  )
}

export default Playground