import React from 'react'
import { FaSlack ,FaGithub,FaDiscord} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#101010] w-full h-[40vh] mt-10">
  <div className="flex flex-col text-white items-center">
    <>
    <h3 className="text-3xl my-6">SIGN UP FOR OUR NEWSLETTER</h3>
    <div>
    <input type="email" className="w-[250px] p-2 rounded-xl text-black" placeholder="abc@gmail.com"  />
   <button className="bg-purple-400 ml-2 p-2 rounded-lg">Connect</button>
    </div>
 
<h5 className="text-md mt-2"> 
By entering your email you accept the Terms & Conditions</h5>
</>
<h5 className="text-md mt-10">Connect with Us</h5>
<div className="flex flex-row justify-between space-x-6 my-2">
  <FaSlack/>
  <FaGithub ></FaGithub>
<FaDiscord/>
</div>
  </div>
    </div>
  )
}

export default Footer