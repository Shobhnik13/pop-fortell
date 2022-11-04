import React from "react";
import { Link, useNavigate } from "react-router-dom"
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
import CarouselComp from "../Components/CarouselComp";
const Home = () => {
  const navigate = useNavigate();
  const NavigateFunctions = () => {
    navigate("/playground");
  
  }
  return (
    <div className="bg-black h-[450vh] bg-[url('./assets/tiles.svg')]">
      <Navbar />
      <div className="flex flex-col mt-[200px]">
        {" "}
        <h1 className="text-8xl mt-9 anton text-fuchsia-500  text-center">
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
        <Link to="/playground"><div className="connectBtn text-fuchsia-500 font-semibold  ">Play and Earn</div></Link>
        <div className="connectBtn text-fuchsia-500 font-semibold">Learn More</div>
        </div>
      </div>
<CarouselComp/>
   <Details2/>
    </div>
  );
};

export default Home;
