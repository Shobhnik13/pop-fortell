import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className="bg-black h-[100vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
      <h1 className="text-6xl mt-9 anton text-white text-center">Trust your Instinct and <span className="text-span">Earn</span> </h1>
  <p className="text-2xl mt-5 text-zinc-400 text-center">Welcome to the new age of P2E platform where you can earn by guessing</p>
    </div>
  )
}

export default Home