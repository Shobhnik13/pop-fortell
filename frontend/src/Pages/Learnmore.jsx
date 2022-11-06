import React,{ useEffect } from "react";
import Navbar from '../Components/Navbar'
import Aos from "aos";
import "aos/dist/aos.css";

const Learnmore = () => {
    useEffect(()=>{
        Aos.init({duration: 900});
    },[]);
  return (
    <div className="bg-black h-[100vh] bg-[url('./assets/tiles.svg') ] p-12 ">
        {/* <Navbar/> */}
        <div data-aos="fade-up" className='w-[60%] bg-[#101010] mt-[0px] p-4 m-auto hover:bg-black hover:cursor-pointer rounded-xl'>
        <div className='tnc anton  text-6xl  text-fuchsia-500 text-center'>TERMS AND CONDITIONS</div>
        <div className="tncli text-white text-xl font-semibold flex flex-col m-6">
            <li className='p-4'>User should be 18+ in age </li>
            <li className='p-2'>The Service is intended solely for the User's personal use. The User is only allowed to wager for his/her personal entertainment. Under no circumstances shall a User be permitted to use his/her "real money account" with Pop Foretell for any purpose other than for using the Service.</li>
               </div>
        </div>
    </div>
  )
}

export default Learnmore