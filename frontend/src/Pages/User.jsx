import React,{ useEffect } from "react";
import Navbar from '../Components/Navbar'
import nft from '../assets/nft1.jpg'
import nft2 from '../assets/nft2.jpg'
import nft3 from '../assets/nft3.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
const User = () => {
    useEffect(()=>{
        Aos.init({duraion:1500});
    },[]);
  return (
    <div className="bg-black h-[200vh] bg-[url('./assets/tiles.svg')]">
    {/* <Navbar/> */}
    <div data-aos="fade-down"className=' flex flex-col mt-10 w-[80%] m-auto bg-[#101010] rounded-2xl p-2 hover:bg-black hover:cursor-pointer'>
   <div className='anton text-fuchsia-500 text-5xl font-semibold text-center p-4 '>Your NFT Collection :</div>
   <div className="images flex w-[90%] m-auto">
    <div>
    <img src={nft} alt="" className='w-[70%] rounded-lg ' data-aos="fade-up"/>
    <div className='anton text-white text-lg mx-16 p-2 hover:text-fuchsia-400 '>id:#2398$5</div>
    </div>
    <div>
    <img src={nft2} alt="" className='w-[70%] rounded-lg ' data-aos="fade-down"/>
    <div className='anton text-white text-lg mx-16 p-2 hover:text-fuchsia-400'>id:#5425$8</div>
    <div></div>
    </div>
    <div>
    <img src={nft3} alt="" className='w-[70%] rounded-lg' data-aos="fade-up"/>
    <div className='anton text-white text-lg mx-16 p-2 hover:text-fuchsia-400'>id:#0091$9</div>
        <div></div>
    </div>
   </div>
   </div>
    </div>
  )
}

export default User