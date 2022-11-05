import React,{ useEffect } from "react";
import pred from '../assets/pred1.png'
import predi from '../assets/pred2.png'
import prediction from '../assets/pop_image2.png'
import Aos from "aos";
import "aos/dist/aos.css";


const Details2 = () => {
    useEffect(() =>{
        Aos.init({duration: 900}); 
    },[]);
  return (
    <div>
    <div  data-aos="flip-up" className='flex bg-[#101010] space-x-8 mt-[200px] w-[90%] m-auto rounded-3xl hover:bg-black cursor-pointer items-center'>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12" >
                Betting today is <span className="text-fuchsia-500 font-extrabold text-3xl">broken</span> & exploitative.

            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
            Today’s betting Industry trades on promises of getting rich quick, using every trick in the book to extract the <span className="text-fuchsia-500 font-extrabold text-2xl">maximum value</span> from customers.
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
            And at the same time, their best bettors are penalised by lowering their limits and closing their accounts.
            </div>
        </div>
        <div className="img mt-16 px-6 w-[40%] ">
<img src={pred} alt="" className='rounded-lg'/>
        </div>
    </div>

    <div data-aos="flip-down" className='flex  w-[90%] m-auto rounded-3xl  bg-[#101010] mt-12 hover:bg-black cursor-pointer items-center'>
        <div className="img mt-16 px-6 w-[40%] ">
        <img src={predi} alt="" className='rounded-lg'/>
        </div>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12">
            The best odds & the <span className="text-fuchsia-500 font-extrabold text-3xl">lowest</span> fees.

            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
            Users keep more of their winnings than any other exchange through low fees and the best odds. <span className="text-fuchsia-500 font-extrabold text-2xl" >Pop Foretell</span> doesn’t take a cut.
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
            </div>
        </div>
    </div>
    <div  data-aos="flip-up" className='flex  w-[90%] m-auto rounded-3xl  bg-[#101010] mt-12 hover:bg-black cursor-pointer items-center'>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12">
           <span className="text-fuchsia-500 font-extrabold text-3xl">P2E</span> Market Place.
            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
           <span className="text-fuchsia-500 font-extrabold text-2xl">Pop Foretell</span> is a P2E prediction market place where users stake their crypto money to predict the interesting theories of the ongoing pop culture.
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
                  </div>
        </div>
        <div className="img  px-6 w-[40%]   ">
<img src={prediction} alt="" className='rounded-lg mb-12'/>
        </div>
    </div>
    </div>
// ------------

    
  )
}

export default Details2