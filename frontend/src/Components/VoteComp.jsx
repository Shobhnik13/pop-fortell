<<<<<<< HEAD
import React from 'react'
import {Contract, ethers} from 'ethers'
import { address,abi } from '../../constant/abi'
const VoteComp = ({q}) => {
//   async function checkOption(_id){
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       const signer = provider.getSigner()
//      const checkContract=new Contract(address,abi,signer);
//     const result =await checkContract.checkAnswer(4,_id);

//     console.log(result);
     
    
//    }  
=======
import React,{ useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const VoteComp = () => {
    useEffect(()=>{
        Aos.init({duration: 1500});
    },[]);  return (
    <div className=' mx-4  justify-evenly mt-6 font2 font-medium '>

<<<<<<< HEAD
        <div className='main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black ' >
            <div className='text-white question'><span className='  font-semiboldbold text-2xl text-fuchsia-500'>Fan theory: </span>{q.question}</div>
=======
        <div className='main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black' data-aos="fade-up">
            <div className='text-white question'><span className='  font-semiboldbold text-2xl text-fuchsia-500'>Fan theory: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde laudantium atque illum, nisi dolore enim accusamus odit fuga! Porro, illum.</div>
>>>>>>> bba824d13e41fcc4dba5921a7c49cb6184ec7633
        <div className='options text-white'><span className='font-semiboldbold text-2xl text-fuchsia-500'>Options:</span></div>
     <div className="optionsbox flex flex-row flex-wrap ">
        <div className='optionbtn text-black; w-[40%] rounded-xl m-3 p-2 hover:cursor-pointer text-lg hover:bg-[#101010]' ><span >A : </span>{q.option1}</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold' >B : </span>{q.option2}</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold' >C : </span>{q.option3}</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold' >D : </span>{q.option4}</div>
     </div>
        </div>
        {/* ------------------------------------ */}
        <div className='main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black' data-aos="fade-up">
            <div className='text-white question'><span className='  font-semiboldbold text-2xl text-fuchsia-500'>Fan theory: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde laudantium atque illum, nisi dolore enim accusamus odit fuga! Porro, illum.</div>
        <div className='options text-white'><span className='font-semiboldbold text-2xl text-fuchsia-500'>Options:</span></div>
     <div className="optionsbox flex flex-row flex-wrap ">
        <div className='optionbtn text-black; w-[40%] rounded-xl m-3 p-2 hover:cursor-pointer text-lg hover:bg-[#101010]'><span className='font-bold'>A: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>B: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>C: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>D: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
     </div>
        </div>
        {/* ------------------------------ */}
        <div className='main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black mt-8' data-aos="fade-up">
            <div className='text-white question'><span className='  font-semiboldbold text-2xl text-fuchsia-500'>Fan theory: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde laudantium atque illum, nisi dolore enim accusamus odit fuga! Porro, illum.</div>
        <div className='options text-white'><span className='font-semiboldbold text-2xl text-fuchsia-500'>Options:</span></div>
     <div className="optionsbox flex flex-row flex-wrap ">
        <div className='optionbtn text-black; w-[40%] rounded-xl m-3 p-2 hover:cursor-pointer text-lg hover:bg-[#101010]'><span className='font-bold'>A: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>B: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>C: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>D: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
     </div>
        </div>
        {/* ---------------------------------- */}
        <div className='main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black mt-8' data-aos="fade-up">
            <div className='text-white question'><span className='  font-semiboldbold text-2xl text-fuchsia-500'>Fan theory: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde laudantium atque illum, nisi dolore enim accusamus odit fuga! Porro, illum.</div>
        <div className='options text-white'><span className='font-semiboldbold text-2xl text-fuchsia-500'>Options:</span></div>
     <div className="optionsbox flex flex-row flex-wrap ">
        <div className='optionbtn text-black; w-[40%] rounded-xl m-3 p-2 hover:cursor-pointer text-lg hover:bg-[#101010]'><span className='font-bold'>A: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>B: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>C: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
        <div className='optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]'><span className='font-bold'>D: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est!</div>
     </div>
        
    </div>
    </div>
  )
}

export default VoteComp