import React,{ useEffect } from "react";
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'
import { question } from '../questions/ques'
import Aos from "aos";
import "aos/dist/aos.css";

const Playground = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div className="bg-black h-[300vh] bg-[url('./assets/tiles.svg')]">
      {/* <Navbar/> */}
        <h1 className="text-white text-6xl anton text-center p-14" data-aos="fade-up">PREDICT AND LET THE<span className="font-extrabold text-fuchsia-500"> EARN </span>BEGIN</h1>
    {question.map((q)=>{return <VoteComp q={q}></VoteComp>})}
    
    </div>
    
  )
}

export default Playground
