import { Contract, ethers } from "ethers";
import { address, abi } from "../../constant/abi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//   async function checkOption(_id){
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       const signer = provider.getSigner()
//      const checkContract=new Contract(address,abi,signer);
//     const result =await checkContract.checkAnswer(4,_id);

//     console.log(result);

//    }

const VoteComp = ({ q }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className=" mx-4  justify-evenly mt-6 font2 font-medium" data-aos="fade-down">
      <div className="main w-[45%] bg-[#101010] p-[30px] hover:cursor-pointer rounded-2xl hover:bg-black">
        <div className="text-white question">
          <span className="  font-semiboldbold text-2xl text-fuchsia-500">
            Fan theory:{" "}
          </span>
          {q.question}
        </div>
        <div className="options text-white">
          <span className="font-semiboldbold text-2xl text-fuchsia-500">
            Options:
          </span>
        </div>
        <div className="optionsbox flex flex-row flex-wrap ">
          <div className="optionbtn text-black; w-[40%] rounded-xl m-3 p-2 hover:cursor-pointer text-lg hover:bg-[#101010]">
            <span>A : </span>
            {q.option1}
          </div>
          <div className="optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]">
            <span className="font-bold">B : </span>
            {q.option2}
          </div>
          <div className="optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]">
            <span className="font-bold">C : </span>
            {q.option3}
          </div>
          <div className="optionbtn text-black w-[40%] rounded-xl m-3  p-2 hover:cursor-pointer hover:bg-[#101010]">
            <span className="font-bold">D : </span>
            {q.option4}
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}

      {/* ------------------------------ */}

      {/* ---------------------------------- */}
    </div>
  );
};

export default VoteComp;
