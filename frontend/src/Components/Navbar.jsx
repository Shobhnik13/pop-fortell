import React,{useState} from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo3.png'
import {Link} from 'react-router-dom';
import { ethers } from "ethers";
const Navbar = () => {
 
  const [acc,setAcc]=useState("");
  const [isConnected,setIsConnected]=useState(false);
  const connectwalletHandler = async () => {
    if (window.ethereum) {
      console.log("Detected");
      try {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((response) =>{ setAcc(response[0])
           
          setIsConnected(true);
          }); 
      } catch (error) {
        console.log(error);
      }
    } else {

      console.log("Not Detected");
    }
  };
  console.log(acc.length);
  const newAddress = acc.slice(0,4)+"..."+acc.slice(38,42)
  console.log(acc,isConnected);
  return (
    <div className="nav bg-[#101010] h-[6rem] content-center   text-white flex justify-between">
    <img src={logo2} alt="" width="250px"  />
        <div className="flex flex-row"><div className="connectBtn text-fuchsia-500 font-semibold" onClick={connectwalletHandler}>{isConnected?newAddress:"Connect Wallet"}</div>
    
  {isConnected&& <Link to='user'><div className="connectBtn text-fuchsia-500 font-semibold" >{isConnected?"User":""}</div></Link>}
  </div>
  </div>

  )
}

export default Navbar