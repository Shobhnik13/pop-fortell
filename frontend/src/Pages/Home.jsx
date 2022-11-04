import React from "react";
import Navbar from "../Components/Navbar";
import Playground from "./Playground";
import t1 from "../assets/T1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t7.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import giphy from "../assets/giphy.gif";
import Details2 from "../Components/Details2";
const Home = () => {
  return (
    <div className="bg-black h-[400vh] bg-[url('./assets/tiles.svg')]">
      <Navbar />
      <div className="flex flex-col mt-[100px]">
        {" "}
        <h1 className="text-6xl mt-9 anton text-fuchsia-500  text-center">
          Trust your Instinct and <span className="text-span">Earn</span>{" "}
        </h1>
        <p className="text-2xl mt-5 text-zinc-400 text-center font-medium">
          Welcome to the new age of P2E platform where you can earn by guessing
        </p>
        <div
          className="mt-3 mb-8" 
          style={{
            height: "1px",
            width: "100%",
            backgroundImage:
              "linear-gradient(90deg, rgba(171, 84, 244, 0), rgba(171, 84, 244, 0.5) 25%, rgb(255, 255, 255) 50%, rgba(171, 84, 244, 0.5) 75%, rgba(171, 84, 244, 0))",
          }}
        ></div>
        <div className="flex justify-center">
        <div className="connectBtn text-fuchsia-500 font-semibold ">Play and Earn</div>
        <div className="connectBtn text-fuchsia-500 font-semibold">Learn More</div>
        </div>
      </div>

      {/* <div className="flex justify-center">
<img src={giphy} alt="" srcset="" className='center' width="300px"/></div>
            <img src={t1} alt="" width="500px" className="my-3 rounded-lg absolute left-[540px] z-"/>
            <img src={t2} alt="" width="400px" className="my-3 rounded-lg absolute left-[1112px]"/>
            <img src={t3} alt="" width="500px " className="my-3 rounded-lg absolute top-[600px]"/> 

            <img src={t4} alt="" width="500px"className="my-3 rounded-lg absolute  top-[600px] left-[540px]"/>
            <img src={t5} alt="" width="400px"className="my-3 rounded-lg absolute  top-[600px] left-[1122px]"/>
            <img src={t6} alt="" width="500px"className="my-3 rounded-lg top-[520px] left-[600px]"/> */}
  <Details2/>
    </div>
  );
};

export default Home;
