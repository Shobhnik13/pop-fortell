import React,{ useEffect } from "react";
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'
import Aos from "aos";
import "aos/dist/aos.css";
const Playground = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div className="bg-black h-[180vh] bg-[url('./assets/tiles.svg')]">
      <Navbar/>
        <h1 className="anton text-5xl text-white text-center m-8" data-aos="fade-right">Predict And Let The <span className='anton text-5xl font-bold text-fuchsia-500'>Earn</span> Begin.</h1>
    <VoteComp id={1}/>
    
    </div>
    
  )
}

export default Playground
