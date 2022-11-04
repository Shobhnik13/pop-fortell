import React from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo3.png'
const Navbar = () => {
  return (
    <div className="nav bg-[#101010] h-[6rem] content-center   text-white flex justify-between">
    <img src={logo2} alt="" width="250px"  />
        <div className="connectBtn text-fuchsia-500 font-semibold">Connect Wallet</div>
    </div>
  )
}

export default Navbar