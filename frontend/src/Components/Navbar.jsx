import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="nav bg-[#101010] h-[6rem] content-center   text-white flex justify-between">
    <img src={logo} alt="" width="200px" height="100px"  />
        <div className="connectBtn text-fuchsia-500 font-semibold">Connect Wallet</div>
    </div>
  )
}

export default Navbar