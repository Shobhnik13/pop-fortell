import React from 'react'
import Navbar from '../Components/Navbar'
import VoteComp from '../Components/VoteComp'
import { question } from '../questions/ques'

const Playground = () => {
  return (
    <div className="bg-black h-[300vh] bg-[url('./assets/tiles.svg')]">
      {/* <Navbar/> */}
        <h1 className="text-fuchsia-400 text-6xl anton text-center" >PREDICT AND LET THE EARN BEGIN</h1>
    {question.map((q)=>{return <VoteComp q={q}></VoteComp>})}
    
    </div>
    
  )
}

export default Playground
